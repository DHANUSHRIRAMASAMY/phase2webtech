// Weather API Integration
// Get your free API key from: https://openweathermap.org/api

const WEATHER_API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your API key
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

// Get weather by location name
async function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value.trim();
    
    if (!location) {
        alert('Please enter a location');
        return;
    }
    
    if (WEATHER_API_KEY === 'https://openweathermap.org/api') {
        alert('Please add your OpenWeatherMap API key in js/weather.js');
        showDemoWeather(location);
        return;
    }
    
    try {
        showLoading();
        
        // Get current weather
        const currentWeather = await fetchCurrentWeather(location);
        
        // Get 5-day forecast
        const forecast = await fetchForecast(location);
        
        displayWeather(currentWeather, forecast);
        
    } catch (error) {
        console.error('Weather fetch error:', error);
        alert('Unable to fetch weather data. Showing demo data.');
        showDemoWeather(location);
    }
}

// Fetch current weather
async function fetchCurrentWeather(location) {
    const response = await fetch(
        `${WEATHER_API_URL}/weather?q=${location}&units=metric&appid=${WEATHER_API_KEY}`
    );
    
    if (!response.ok) {
        throw new Error('Weather data not found');
    }
    
    return await response.json();
}

// Fetch 5-day forecast
async function fetchForecast(location) {
    const response = await fetch(
        `${WEATHER_API_URL}/forecast?q=${location}&units=metric&appid=${WEATHER_API_KEY}`
    );
    
    if (!response.ok) {
        throw new Error('Forecast data not found');
    }
    
    return await response.json();
}

// Display weather data
function displayWeather(current, forecast) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    
    // Get weather icon
    const iconCode = current.weather[0].icon;
    const iconClass = getWeatherIconClass(current.weather[0].main);
    
    // Update current weather
    weatherDisplay.innerHTML = `
        <div class="weather-current">
            <div class="weather-icon">
                <i class="fas ${iconClass}"></i>
            </div>
            <div class="weather-temp">${Math.round(current.main.temp)}°C</div>
            <div class="weather-desc">${current.weather[0].description}</div>
            <div class="weather-location">${current.name}, ${current.sys.country}</div>
        </div>
        <div class="weather-details">
            <div class="weather-detail">
                <i class="fas fa-tint"></i>
                <span>Humidity: ${current.main.humidity}%</span>
            </div>
            <div class="weather-detail">
                <i class="fas fa-wind"></i>
                <span>Wind: ${Math.round(current.wind.speed * 3.6)} km/h</span>
            </div>
            <div class="weather-detail">
                <i class="fas fa-cloud-rain"></i>
                <span>Rain: ${current.clouds.all}%</span>
            </div>
        </div>
        <div class="weather-forecast">
            ${generateForecastHTML(forecast)}
        </div>
    `;
}

// Generate forecast HTML
function generateForecastHTML(forecast) {
    const dailyForecasts = {};
    
    // Group forecasts by day (take one forecast per day at noon)
    forecast.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const hour = date.getHours();
        
        // Take forecast around noon (12:00)
        if (hour >= 11 && hour <= 13 && Object.keys(dailyForecasts).length < 5) {
            if (!dailyForecasts[day]) {
                dailyForecasts[day] = item;
            }
        }
    });
    
    let html = '';
    Object.entries(dailyForecasts).forEach(([day, data]) => {
        const iconClass = getWeatherIconClass(data.weather[0].main);
        html += `
            <div class="forecast-day">
                <div>${day}</div>
                <i class="fas ${iconClass}"></i>
                <div>${Math.round(data.main.temp)}°C</div>
            </div>
        `;
    });
    
    return html;
}

// Get Font Awesome icon class based on weather condition
function getWeatherIconClass(condition) {
    const iconMap = {
        'Clear': 'fa-sun',
        'Clouds': 'fa-cloud',
        'Rain': 'fa-cloud-rain',
        'Drizzle': 'fa-cloud-rain',
        'Thunderstorm': 'fa-bolt',
        'Snow': 'fa-snowflake',
        'Mist': 'fa-smog',
        'Smoke': 'fa-smog',
        'Haze': 'fa-smog',
        'Fog': 'fa-smog'
    };
    
    return iconMap[condition] || 'fa-cloud-sun';
}

// Show loading state
function showLoading() {
    const weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.innerHTML = `
        <div class="weather-loading">
            <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: #2d7a3e;"></i>
            <p>Fetching weather data...</p>
        </div>
    `;
}

// Show demo weather data (fallback)
function showDemoWeather(location) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.innerHTML = `
        <div class="weather-current">
            <div class="weather-icon">
                <i class="fas fa-cloud-sun"></i>
            </div>
            <div class="weather-temp">28°C</div>
            <div class="weather-desc">Partly Cloudy</div>
            <div class="weather-location">${location || 'Mumbai, India'}</div>
        </div>
        <div class="weather-details">
            <div class="weather-detail">
                <i class="fas fa-tint"></i>
                <span>Humidity: 65%</span>
            </div>
            <div class="weather-detail">
                <i class="fas fa-wind"></i>
                <span>Wind: 12 km/h</span>
            </div>
            <div class="weather-detail">
                <i class="fas fa-cloud-rain"></i>
                <span>Rain: 20%</span>
            </div>
        </div>
        <div class="weather-forecast">
            <div class="forecast-day">
                <div>Mon</div>
                <i class="fas fa-sun"></i>
                <div>30°C</div>
            </div>
            <div class="forecast-day">
                <div>Tue</div>
                <i class="fas fa-cloud"></i>
                <div>28°C</div>
            </div>
            <div class="forecast-day">
                <div>Wed</div>
                <i class="fas fa-cloud-rain"></i>
                <div>26°C</div>
            </div>
            <div class="forecast-day">
                <div>Thu</div>
                <i class="fas fa-cloud-sun"></i>
                <div>29°C</div>
            </div>
            <div class="forecast-day">
                <div>Fri</div>
                <i class="fas fa-sun"></i>
                <div>31°C</div>
            </div>
        </div>
    `;
}

// Get weather by geolocation
function getWeatherByLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    showLoading();
                    const { latitude, longitude } = position.coords;
                    
                    if (WEATHER_API_KEY === 'YOUR_API_KEY_HERE') {
                        alert('Please add your OpenWeatherMap API key');
                        showDemoWeather('Your Location');
                        return;
                    }
                    
                    const currentWeather = await fetch(
                        `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`
                    ).then(res => res.json());
                    
                    const forecast = await fetch(
                        `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`
                    ).then(res => res.json());
                    
                    displayWeather(currentWeather, forecast);
                    document.getElementById('locationInput').value = currentWeather.name;
                    
                } catch (error) {
                    console.error('Geolocation weather error:', error);
                    showDemoWeather('Your Location');
                }
            },
            (error) => {
                console.error('Geolocation error:', error);
                alert('Unable to get your location. Please enter manually.');
            }
        );
    } else {
        alert('Geolocation is not supported by your browser');
    }
}

// Allow Enter key to search
document.addEventListener('DOMContentLoaded', function() {
    const locationInput = document.getElementById('locationInput');
    if (locationInput) {
        locationInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                getWeather();
            }
        });
    }
});
