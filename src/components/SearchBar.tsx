import { useEffect, useState } from "react";
import { getCityByName, getCityDetails } from "../api/weatherApi";
import type { Weather, City } from "../types/weather.types";

type SearchBarProps = {
  setCity: React.Dispatch<React.SetStateAction<City | null>>;
  setWeather: React.Dispatch<React.SetStateAction<Weather | null>>;
};

export default function SearchBar({ setCity, setWeather }: SearchBarProps) {
  const [cityName, setCityName] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>, cityName: string) {
    e.preventDefault();
    getCityByName(cityName).then((data) => {
      setCity(data.results[0]);
      setLat(data.results[0].latitude);
      setLon(data.results[0].longitude);
    });
  }

  useEffect(() => {
    if (lat !== 0 || lon !== 0) {
      getCityDetails(lat, lon).then((data) => {
        setWeather(data);
      });
    }
  }, [lat, lon, setWeather]);

  return (
    <div>
      <form
        className="flex gap-3 justify-center mb-12"
        onSubmit={(e) => handleSubmit(e, cityName)}
      >
        <label
          className="flex items-center
gap-3
bg-[#24243D]
px-5
py-4
rounded-xl
w-125"
          htmlFor="cityName"
        >
          <img src="/images/icon-search.svg" alt="icon search" />
          <input
            className="bg-transparent
            outline-none
            w-full
            text-white"
            placeholder="Search for a place..."
            id="cityName"
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </label>

        <button
          className="bg-[#4E5CF0]
px-6
rounded-xl
hover:bg-[#5d6cff]
transition"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
