// # **Weather forecast**

// You are building a web application that fetches data from multiple APIs to display information about different countries. You need to fetch the country details from one API and the weather information for the capital city from another API.

// **Here are the requirements:**

// Use the fetch API to get the country details from https://restcountries.com/v3.1/name/{countryName}.

// Use the fetch API to get the weather details from https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true.

// The weather API requires the latitude and longitude of the capital city, which you will get from the country details.

// Display the country's name, capital city, and current temperature in the console.

// **Example:**

// If the user searches for "France", your application should:

// Fetch country details from https://restcountries.com/v3.1/name/France.

// Extract the capital city and its coordinates (latitude and longitude).

// Fetch the current weather for the capital city from the weather API.

// **Display the results in the console as follows:**Country: France
// Capital: Paris
// Current Temperature: 18°C

async function getCountryWeather(countryName) {
  try {
    //fettch country details
    const countryRespomse = await fetch(
      `https://restcountries.com/v3.1/name/{countryName}`
    );
    if (!countryRespomse.ok) {
      throw new Error(`country not Found: ${countryName}`);
    }
    const countryData = await countryRespomse.json();
    const country = countryData[0];
    const name = country.name.common;
    const capital = country.capital[0];
    const lat = country.capitalInfo.lating[0];
    const lon = country.capitalInfo.lating[1];
    //fetch weather details
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    if (!weatherResponse.ok) {
      throw new Error(`weather data not found for : ${capital}`);
    }
    const weatherData = await weatherResponse.json();
    const temperature = weatherData.current_weather.temperature;
    console.log(`country:${name}`);
    console.log(`capital:${capital}`);
    console.log(`current Temparature:${temperature}degree celsius`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
getCountryWeather("Rwanda");
