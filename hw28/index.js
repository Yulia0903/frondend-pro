const city = "LVIV";
const apiKey = "5d066958a60d315387d9492393935c19";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const windDirection = data.wind.deg;
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    document.getElementById(
      "temperature"
    ).textContent = `Температура: ${temperature}°C`;
    document.getElementById("pressure").textContent = `Тиск: ${pressure} hPa`;
    document.getElementById("description").textContent = `Опис: ${description}`;
    document.getElementById("humidity").textContent = `Вологість: ${humidity}%`;
    document.getElementById(
      "windSpeed"
    ).textContent = `Швидкість вітру: ${windSpeed} м/с`;
    document.getElementById(
      "windDirection"
    ).textContent = `Напрям вітру: ${windDirection}°`;
    document.getElementById("weatherIcon").src = iconUrl;
  })
  .catch((error) =>
    console.error("Помилка при отриманні даних погоди:", error)
  );
