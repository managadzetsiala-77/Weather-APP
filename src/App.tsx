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

<div className="flex gap-3 w-[70%]">
  <div className="w-full">
<Today city={city} weather={weather} />
     <TodaysList weather={weather} windSpeed={windSpeed} />
   
      <div className="flex flex-col gap-3 mt-16">
        <h2 className="text-2xl font-bold">Daily forecast</h2>
        <div className="flex gap-3">
 {weather?.daily?.time?.map((date, i) => (
          <DailyCard key={date} weather={weather} date={date} i={i} />
        ))}
        </div>
      
       
      </div>
  </div>

        <section className="w-[30%]">
          <HourlyList weather={weather}/>
          
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
