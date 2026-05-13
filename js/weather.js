const API_URL = 'http://localhost:5000/api';

// Get weather by city name
async function getWeather() {
    const location = document.getElementById('locationInput').value.trim();

    if (!location) {
        alert('Please enter a location');
        return;
    }

    showLoading();

    try {
        const res = await fetch(`${API_URL}/weather?city=${encodeURIComponent(location)}`);
        const data = await res.json();

        if (!res.ok) {
            alert(data.message || 'City not found.');
            showDemoWeather(location);
            return;
        }

        displayWeather(data.current, data.forecast);

    } catch (error) {
        console.error('Weather error:', error);
        alert('Cannot connect to server. Showing demo data.');
        showDemoWeather(location);
    }
}

// Get weather by GPS location
function getWeatherByLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        return;
    }

    showLoading();

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;

            try {
                const res = await fetch(`${API_URL}/weather/coords?lat=${latitude}&lon=${longitude}`);
                const data = await res.json();

                if (!res.ok) {
                    showDemoWeather('Your Location');
                    return;
                }

                displayWeather(data.current, data.forecast);
                document.getElementById('locationInput').value = data.current.city;

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
}

// Display weather data from backend
function displayWeather(current, forecast) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const iconClass = getWeatherIconClass(current.condition);

    weatherDisplay.innerHTML = `
        <div class="weather-current">
            <div class="weather-icon"><i class="fas ${iconClass}"></i></div>
            <div class="weather-temp">${current.temp}°C</div>
            <div class="weather-desc">${current.description}</div>
            <div class="weather-location">${current.city}, ${current.country}</div>
        </div>
        <div class="weather-details">
            <div class="weather-detail">
                <i class="fas fa-tint"></i>
                <span>Humidity: ${current.humidity}%</span>
            </div>
            <div class="weather-detail">
                <i class="fas fa-wind"></i>
                <span>Wind: ${current.wind_speed} km/h</span>
            </div>
            <div class="weather-detail">
                <i class="fas fa-thermometer-half"></i>
                <span>Feels like: ${current.feels_like}°C</span>
            </div>
        </div>
        <div class="weather-forecast">
            ${forecast.map(day => `
                <div class="forecast-day">
                    <div>${day.day}</div>
                    <i class="fas ${getWeatherIconClass(day.condition)}"></i>
                    <div>${day.temp}°C</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Map weather condition to Font Awesome icon
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

// Loading state
function showLoading() {
    document.getElementById('weatherDisplay').innerHTML = `
        <div class="weather-loading">
            <i class="fas fa-spinner fa-spin" style="font-size:3rem;color:#2d7a3e;"></i>
            <p>Fetching weather data...</p>
        </div>
    `;
}

// Demo fallback
function showDemoWeather(location) {
    document.getElementById('weatherDisplay').innerHTML = `
        <div class="weather-current">
            <div class="weather-icon"><i class="fas fa-cloud-sun"></i></div>
            <div class="weather-temp">28°C</div>
            <div class="weather-desc">Partly Cloudy (Demo)</div>
            <div class="weather-location">${location || 'Mumbai, India'}</div>
        </div>
        <div class="weather-details">
            <div class="weather-detail"><i class="fas fa-tint"></i><span>Humidity: 65%</span></div>
            <div class="weather-detail"><i class="fas fa-wind"></i><span>Wind: 12 km/h</span></div>
            <div class="weather-detail"><i class="fas fa-thermometer-half"></i><span>Feels like: 30°C</span></div>
        </div>
        <div class="weather-forecast">
            <div class="forecast-day"><div>Mon</div><i class="fas fa-sun"></i><div>30°C</div></div>
            <div class="forecast-day"><div>Tue</div><i class="fas fa-cloud"></i><div>28°C</div></div>
            <div class="forecast-day"><div>Wed</div><i class="fas fa-cloud-rain"></i><div>26°C</div></div>
            <div class="forecast-day"><div>Thu</div><i class="fas fa-cloud-sun"></i><div>29°C</div></div>
            <div class="forecast-day"><div>Fri</div><i class="fas fa-sun"></i><div>31°C</div></div>
        </div>
    `;
}

// Enter key support
document.addEventListener('DOMContentLoaded', function() {
    const locationInput = document.getElementById('locationInput');
    if (locationInput) {
        locationInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') getWeather();
        });
    }
});
