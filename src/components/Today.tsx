import type { City, Weather } from "../types/weather.types";
import { formatDate } from "../utils/weather.util";
import WeatherIcon from "./WeatherIcon";

const Today = ({ city, weather }: { city: City | null; weather: Weather | null }) => {
  return (
    <div className="w-full  h-80 flex items-center justify-between px-5 rounded-[55px] bg-cover bg-[url(/images/bg-today-large.svg)]">
      
      <div className="flex flex-col gap-2 ">
        <h2 className="text-3xl font-bold">{city?.name},  {city?.country} </h2>
     
      <h2 className="text-gray-300 text-xl mt-3">{formatDate(weather?.daily?.time)} </h2>
        </div>
        <div className="flex items-center gap-5">

      <WeatherIcon
        weather_code={weather?.current?.weather_code ? weather.current.weather_code : 1}
      />
      <h2 className="text-8xl font-bold">{weather?.current?.temperature_2m.toFixed() + "°"}</h2>
        </div>
      
    </div>
  );
};

export default Today;
