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
      <form className="flex gap-3 justify-center mb-10" onSubmit={(e) => handleSubmit(e, cityName)}>
        <label className="flex  gap-2 px-4 py-3 rounded bg-gray-800 w-[30%]" htmlFor="cityName">
          <img src="/images/icon-search.svg" alt="icon search" />
          <input
            className="outline-0 w-full"
            placeholder="Search for a place..."
            id="cityName"
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </label>

        <button className="bg-blue-800 px-5 rounded leading-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
