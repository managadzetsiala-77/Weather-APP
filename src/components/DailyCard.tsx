import type { Weather } from "../types/weather.types";
import WeatherIcon from "./WeatherIcon";
import { getDay } from "../utils/weather.util";

export default function DailyCard({
  weather,
  date,
  i,
}: {
  weather: Weather;
  date: string;
  i: number;
}) {
  return (
    <div className="w-28 h-48 flex flex-col items-center justify-between bg-[#24243D] rounded-2xl mt-5 py-4">
      <h2>{getDay(date).substring(0, 3)}</h2>
      <WeatherIcon weather_code={weather?.daily.weather_code[i]} />
      <div className="flex items-center gap-9 ">
        <h2> {weather?.daily?.temperature_2m_max[i].toFixed() + "°"} </h2>
        <h2> {weather?.daily?.temperature_2m_min[i].toFixed() + "°"} </h2>
      </div>
    </div>
  );
}
