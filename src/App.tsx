import { useState } from "react";
import WeatherIcon from "./components/WeatherIcon";
import type { City, Weather } from "./types/weather.types";
import Header from "./components/Header";
import { getDay } from "./utils/weather.util";
import SearchBar from "./components/SearchBar";
import Heading from "./components/Heading";
import Today from "./components/Today";

export default function App() {
  const [city, setCity] = useState<City | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [weekDay, setWeekDay] = useState(
    new Date().toLocaleDateString("en-US", { day: "2-digit" }),
  );
  const [windSpeed, setWindSpeed] = useState("km");

  return (
    <div>
      <Header />

      <Heading />

      <SearchBar setCity={setCity} setWeather={setWeather} />

      <Today city={city} weather={weather} />

      <button className="border p-1.5" onClick={() => setWindSpeed("km")}>
        km/h
      </button>
      <button className="border p-1.5" onClick={() => setWindSpeed("mp")}>
        mp/h
      </button>

      <div>
        <section>
          <h2>weather code : {weather?.current?.weather_code}</h2>

          <h2>fills like: {weather?.current?.apparent_temperature.toFixed()} </h2>
          <h2> humidity: {weather?.current?.relative_humidity_2m.toFixed()} </h2>
          <h2>
            wind:
            {windSpeed == "km"
              ? weather?.current?.wind_speed_10m.toFixed() + " km/h"
              : (weather?.current?.wind_speed_10m
                  ? weather?.current?.wind_speed_10m * 0.621371
                  : 0
                ).toFixed(1) + " mph"}
          </h2>
          <h2>precipitation: {weather?.current?.precipitation.toFixed()}</h2>

          {weather?.daily?.time?.map((date, i) => {
            return (
              <div key={date}>
                <h2>{getDay(date).substring(0, 3)}</h2>
                <WeatherIcon weather_code={weather.daily.weather_code[i]} />
                <h2>max temp: {weather?.daily?.temperature_2m_max[i].toFixed()} </h2>
                <h2>min temp: {weather?.daily?.temperature_2m_min[i].toFixed()} </h2>

                <hr />
              </div>
            );
          })}

          <select onChange={(e) => setWeekDay(e.target.value)}>
            {weather?.daily?.time.map((day: string) => {
              return (
                <option key={day} value={day.substring(8)}>
                  {getDay(day)}
                </option>
              );
            })}
          </select>
        </section>

        <section>
          {weather?.hourly.time.map((item: string, i: number) => {
            if (item.substring(8).startsWith(weekDay)) {
              return (
                <div key={item}>
                  <p>{item.substring(11)}</p>
                  <p>{weather?.hourly.temperature_2m[i].toFixed()}°C</p>
                  <WeatherIcon weather_code={weather?.hourly.weather_code[i]} />
                </div>
              );
            }
          })}
        </section>
      </div>
    </div>
  );
}
