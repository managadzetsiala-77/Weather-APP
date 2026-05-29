import type { Weather } from "../types/weather.types";
import { getDay } from "../utils/weather.util";
import WeatherIcon from "./WeatherIcon";
import { useState } from "react";

export default function HourlyList({ weather }: { weather: Weather | null }) {
  const [weekDay, setWeekDay] = useState(
    new Date().toLocaleDateString("en-US", { day: "2-digit" }),
  );

  return (
    <div className="bg-gray-800 w-full h-213 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#3D3F67] scrollbar-track-transparent p-4 rounded-2xl">
      <div className="flex items-center mb-4 gap-25 w-95 ">
        <h2>Hourly forecast</h2>
        <select onChange={(e) => setWeekDay(e.target.value)} className="bg-gray-700 py-2 px-3">
          {weather?.daily?.time.map((day: string) => {
            return (
              <option className="text-black" key={day} value={day.substring(8)}>
                {getDay(day)}
              </option>
            );
          })}
        </select>
      </div>

      <section className=" flex flex-col gap-4">
        {weather?.hourly.time.map((item: string, i: number) => {
          if (item.substring(8).startsWith(weekDay)) {
            return (
              <div key={item} className="h-16 flex items-center justify-between bg-gray-700 rounded-2xl px-4 ">
                <div className="flex items-center gap-2">
                  <WeatherIcon weather_code={weather?.hourly.weather_code[i]} />
                  <p>{item.substring(11)}</p>
                </div>

                <p>{weather?.hourly.temperature_2m[i].toFixed() + "°"}</p>
              </div>
            );
          }
        })}
      </section>
    </div>
  );
}
