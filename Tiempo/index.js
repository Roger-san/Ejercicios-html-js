const apiKey = "736be0b2270f8e085146ac61558d215b";
const input = document.querySelector("#city");
const search = document.querySelector("#search");
const cities = document.querySelector("#cities");

search.addEventListener("click", searchCityInfo);

class CityWeatherInfo {
    constructor(cityName, countryCode, cityTemp, description) {
        this.cityName = cityName;
        this.countryCode = countryCode;
        this.cityTemp = cityTemp;
        this.description = description;
    }
}

async function searchCityInfo() {
    const value = input.value;
    const weatherInfo = await getWeatherInfo(value.toLowerCase());

    cities.innerHTML = `
    <li>
      <div>
        <p>${weatherInfo.cityName}, ${weatherInfo.countryCode}</p>
        <p>${weatherInfo.cityTemp}</p>
        <p>${weatherInfo.description}</p>
      </div>
    </li>
  `;
}

async function getWeatherInfo(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    return new CityWeatherInfo(
        data.name,
        data.sys.country,
        data.main.temp,
        data.weather[0].description
    );
}