const apiKey = 'your_api_key_here';
document.querySelector('#weather-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const city = document.querySelector('#city').value;
    const weatherDisplay = document.querySelector('#weather-display');
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        weatherDisplay.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)}°C, Weather: ${data.weather[0].description}`;
    } catch (error) {
        weatherDisplay.textContent = error.message;
    }
});
