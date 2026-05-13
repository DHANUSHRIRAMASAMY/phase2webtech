const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../config/db');
require('dotenv').config();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// GET /api/weather?city=Mumbai
router.get('/', async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ message: 'City name is required.' });
    }

    try {
        // Fetch current weather from OpenWeatherMap
        const currentRes = await axios.get(`${WEATHER_BASE_URL}/weather`, {
            params: { q: city, units: 'metric', appid: WEATHER_API_KEY }
        });

        // Fetch 5-day forecast
        const forecastRes = await axios.get(`${WEATHER_BASE_URL}/forecast`, {
            params: { q: city, units: 'metric', appid: WEATHER_API_KEY }
        });

        const current = currentRes.data;
        const forecast = forecastRes.data;

        // Save to DB for history/caching
        await db.query(
            `INSERT INTO weather_data 
             (location, temperature, humidity, wind_speed, rain_forecast, weather_condition, date)
             VALUES (?, ?, ?, ?, ?, ?, CURDATE())
             ON DUPLICATE KEY UPDATE 
             temperature=VALUES(temperature), humidity=VALUES(humidity)`,
            [
                current.name,
                current.main.temp,
                current.main.humidity,
                current.wind.speed,
                current.clouds.all,
                current.weather[0].main
            ]
        );

        res.json({
            current: {
                city: current.name,
                country: current.sys.country,
                temp: Math.round(current.main.temp),
                feels_like: Math.round(current.main.feels_like),
                humidity: current.main.humidity,
                wind_speed: Math.round(current.wind.speed * 3.6), // m/s to km/h
                rain_chance: current.clouds.all,
                condition: current.weather[0].main,
                description: current.weather[0].description,
                icon: current.weather[0].icon
            },
            forecast: processForecast(forecast.list)
        });

    } catch (error) {
        if (error.response?.status === 404) {
            return res.status(404).json({ message: 'City not found. Please check the name.' });
        }
        console.error('Weather API error:', error.message);
        res.status(500).json({ message: 'Failed to fetch weather data.' });
    }
});

// GET /api/weather/coords?lat=19.07&lon=72.87
router.get('/coords', async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ message: 'Latitude and longitude are required.' });
    }

    try {
        const currentRes = await axios.get(`${WEATHER_BASE_URL}/weather`, {
            params: { lat, lon, units: 'metric', appid: WEATHER_API_KEY }
        });

        const forecastRes = await axios.get(`${WEATHER_BASE_URL}/forecast`, {
            params: { lat, lon, units: 'metric', appid: WEATHER_API_KEY }
        });

        const current = currentRes.data;
        const forecast = forecastRes.data;

        res.json({
            current: {
                city: current.name,
                country: current.sys.country,
                temp: Math.round(current.main.temp),
                feels_like: Math.round(current.main.feels_like),
                humidity: current.main.humidity,
                wind_speed: Math.round(current.wind.speed * 3.6),
                rain_chance: current.clouds.all,
                condition: current.weather[0].main,
                description: current.weather[0].description,
                icon: current.weather[0].icon
            },
            forecast: processForecast(forecast.list)
        });

    } catch (error) {
        console.error('Weather coords error:', error.message);
        res.status(500).json({ message: 'Failed to fetch weather data.' });
    }
});

// Helper: extract one forecast per day from the 3-hour interval list
function processForecast(list) {
    const daily = {};

    list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const hour = date.getHours();

        // Pick forecast around noon for each day
        if (hour >= 11 && hour <= 13 && !daily[day]) {
            daily[day] = {
                day,
                temp: Math.round(item.main.temp),
                condition: item.weather[0].main,
                icon: item.weather[0].icon
            };
        }
    });

    return Object.values(daily).slice(0, 5);
}

module.exports = router;
