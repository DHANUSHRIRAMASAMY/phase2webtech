# Weather API Setup Guide

## Get Your Free OpenWeatherMap API Key

### Step 1: Create Account
1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Click "Sign Up" (top right)
3. Fill in your details:
   - Username
   - Email
   - Password
4. Verify your email

### Step 2: Get API Key
1. Log in to your account
2. Go to "API keys" tab
3. You'll see a default API key already created
4. Copy the API key (it looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

### Step 3: Add API Key to Project
1. Open `js/weather.js`
2. Find line 4: `const WEATHER_API_KEY = 'YOUR_API_KEY_HERE';`
3. Replace `YOUR_API_KEY_HERE` with your actual API key
4. Save the file

Example:
```javascript
const WEATHER_API_KEY = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
```

### Step 4: Wait for Activation
- New API keys take 10-15 minutes to activate
- If you get an error immediately, wait a bit and try again

### Step 5: Test the Weather Feature
1. Open `home.html` in your browser
2. Scroll to Weather Forecast section
3. Enter a city name (e.g., "Mumbai", "Delhi", "London")
4. Click the search button
5. You should see live weather data!

## Features Available

### Current Weather
- Temperature (°C)
- Weather description
- Humidity percentage
- Wind speed
- Cloud coverage

### 5-Day Forecast
- Daily temperature predictions
- Weather icons
- Day-wise breakdown

### Location Features
- Search by city name
- Use current location (GPS button)
- Supports cities worldwide

## Free Tier Limits

OpenWeatherMap Free Plan:
- ✅ 60 calls per minute
- ✅ 1,000,000 calls per month
- ✅ Current weather data
- ✅ 5-day forecast
- ✅ More than enough for this project!

## Troubleshooting

### "Invalid API key" Error
- Wait 10-15 minutes after creating account
- Check if you copied the key correctly
- Make sure there are no extra spaces

### "City not found" Error
- Check spelling of city name
- Try adding country code: "Mumbai,IN" or "London,UK"
- Use major city names

### No Weather Data Showing
- Check browser console (F12) for errors
- Verify API key is correctly added
- Make sure you have internet connection

## Alternative: Demo Mode

If you don't want to use an API key, the website will automatically show demo weather data. This is perfect for:
- Testing the UI
- Demonstrations
- Offline development

## API Documentation

Full OpenWeatherMap API docs:
- [Current Weather](https://openweathermap.org/current)
- [5 Day Forecast](https://openweathermap.org/forecast5)
- [API Guide](https://openweathermap.org/guide)

## Security Note

⚠️ **Important**: Never commit your API key to public repositories!

For production:
1. Use environment variables
2. Add API key to `.env` file
3. Add `.env` to `.gitignore`
4. Use backend proxy to hide API key

## Support

Need help?
- OpenWeatherMap Support: https://openweathermap.org/faq
- Check API status: https://openweathermap.org/api-status
