import { useState } from "react";
import type { City, Weather } from "./types/weather.types";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Heading from "./components/Heading";
import Today from "./components/Today";
import DailyCard from "./components/DailyCard";
import HourlyList from "./components/HourlyList";
import TodaysList from "./components/TodaysList";

export default function App() {
  const [city, setCity] = useState<City | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);

  const [windSpeed, setWindSpeed] = useState("km");

  return (
    <div>
      <Header />

      <Heading />

      <SearchBar setCity={setCity} setWeather={setWeather} />

<div className="flex gap-5  max-w-300 mx-auto mt-10">
  <div className="w-full">

    {!weather ? (
      <>
        {/* Today skeleton */}
        <div className="
          w-full
          h-[220px]
          rounded-3xl
          bg-[#24243D]
          animate-pulse
          flex
          items-center
          justify-center
        ">
          <div className="text-gray-300">
            ● ● ●
            <p className="text-center mt-2">Loading...</p>
          </div>
        </div>

        {/* Stats skeleton */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {[1,2,3,4].map(i=>(
            <div
              key={i}
              className="h-[90px] rounded-xl bg-[#24243D] animate-pulse"
            />
          ))}
        </div>

        {/* Daily skeleton */}
        <h2 className="mt-10 mb-4 font-bold">
          Daily forecast
        </h2>

        <div className="grid grid-cols-7 gap-4">
          {[1,2,3,4,5,6,7].map(i=>(
            <div
              key={i}
              className="h-[120px] rounded-xl bg-[#24243D] animate-pulse"
            />
          ))}
        </div>
      </>
    ) : (
      <>
        <Today city={city} weather={weather} />

        <TodaysList
          weather={weather}
          windSpeed={windSpeed}
        />

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-5">
            Daily forecast
          </h2>

          <div className="flex gap-3">
            {weather.daily.time.map((date, i) => (
              <DailyCard
                key={date}
                weather={weather}
                date={date}
                i={i}
              />
            ))}
          </div>
        </div>
      </>
    )}
  </div>

  <section className="w-[30%]">
    <HourlyList weather={weather} />
  </section>

</div>
      
    

      <button className="border p-1.5" onClick={() => setWindSpeed("km")}>
        km/h
      </button>
      <button className="border p-1.5" onClick={() => setWindSpeed("mp")}>
        mp/h
      </button>

      <div>
      
        
      </div>
    </div>
  );
}
