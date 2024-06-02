const apiKey = '3508c7881679cc26a6f396e7a3638baf';
const city = 'Thai Binh';
const units = 'metric'; 

const urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
const urlForecastWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=40&appid=${apiKey}`;

export async function fetchWeather() {
    let weather_status;
    try {
        const currentWeatherResponse = await fetch(urlCurrentWeather);
        const currentWeatherData = await currentWeatherResponse.json();

        const currentWeather = {
            date: new Date(currentWeatherData.dt * 1000),
            weather: currentWeatherData.weather[0].description,
            temperature: currentWeatherData.main.temp,
            humidity: currentWeatherData.main.humidity,
            wind: currentWeatherData.wind.speed
        };
        const forecastWeatherResponse = await fetch(urlForecastWeather);
        const forecastWeatherData = await forecastWeatherResponse.json();

        const forecastWeather = [];
        for (let i = 0; i < forecastWeatherData.list.length; i += 8) {
            const forecast = forecastWeatherData.list[i];
            forecastWeather.push({
                date: new Date(forecast.dt * 1000).toLocaleDateString("vi-vn"),
                weather: forecast.weather[0].description,
                temperature: forecast.main.temp * 1,
                humidity: forecast.main.humidity,
                wind: forecast.wind.speed
            });
        }

        const weatherData = {
            current: currentWeather,
            forecast: forecastWeather.slice(0, 4) 
        };

        console.log(JSON.stringify(weatherData, null, 2));
        weather_status = weatherData
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
    return weather_status
}
