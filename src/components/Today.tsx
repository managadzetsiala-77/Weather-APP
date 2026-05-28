import type { City, Weather } from "../types/weather.types";
import { formatDate } from "../utils/weather.util";
import WeatherIcon from "./WeatherIcon";

const Today = ({ city, weather }: { city: City | null; weather: Weather | null }) => {
  return (
    <div className="w-225 h-120 rounded-[55px] bg-cover bg-[url(/images/bg-today-large.svg)]">
      <h2>counrty name: {city?.country}</h2>
      <h2>city name: {city?.name}</h2>
      <h2>date is : {formatDate(weather?.daily?.time)} </h2>
      <WeatherIcon
        weather_code={weather?.current?.weather_code ? weather.current.weather_code : 1}
      />
      <h2>temperature: {weather?.current?.temperature_2m.toFixed()}</h2>
    </div>
  );
};

export default Today;
