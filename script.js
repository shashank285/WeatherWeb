const apiKey = 'e53301e27efa0b66d05045d91b2742d3'; 

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfoElement = document.getElementById('weatherInfo');

    if (cityInput) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const pressure = data.main.pressure;
                const windSpeed = data.wind.speed;
                const rainVolume = data.rain ? data.rain['1h'] : 0;

                const weatherInfo = `
                    <p>Weather: ${weatherDescription}</p>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Pressure: ${pressure} hPa</p>
                    <p>Wind Speed: ${windSpeed} m/s</p>
                    <p>Rain in the last hour: ${rainVolume} mm</p>
                `;

                weatherInfoElement.innerHTML = weatherInfo;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfoElement.innerHTML = '<p>Unable to fetch weather data. Please try again.</p>';
            });
    } else {
        weatherInfoElement.innerHTML = '<p>Please enter a city name.</p>';
    }
}
