const CITY_PART_ONE = "https://geocoding-api.open-meteo.com/v1/search?name=";
const CITY_PART_TWO = "&count=1&language=en&format=json";

const DETAIL_PART_ONE = "https://api.open-meteo.com/v1/forecast?latitude=";
const DETAUL_PART_TWO = "&longitude=";
const DETAIL_PART_THREE =
  "&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=auto&forecast_days=7";

export async function getCityByName(cityName: string) {
  try {
    const response = await fetch(CITY_PART_ONE + cityName + CITY_PART_TWO);

    if (!response.ok) {
      throw new Error("Failed to fetch city data");
    }

    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

export async function getCityDetails(lat: number, lon: number) {
  try {
    const response = await fetch(DETAIL_PART_ONE + lat + DETAUL_PART_TWO + lon + DETAIL_PART_THREE);

    if (!response.ok) {
      throw new Error("Failed to fetch city details");
    }

    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
