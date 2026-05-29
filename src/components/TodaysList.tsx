import type { Weather } from "../types/weather.types";
import TodaysCard from "./TodaysCard";

export default function TodaysList({weather, windSpeed}: {weather: Weather | null; windSpeed: string}) {
  return (
       <div className="flex w-full gap-5 mt-8">
  <TodaysCard>
        <h2>fills like: </h2>
        <h2>{weather?.current?.apparent_temperature.toFixed()} °</h2>
      </TodaysCard>
      <TodaysCard>
        <h2>humidity: </h2>

        <h2> {weather?.current?.relative_humidity_2m.toFixed()} %</h2>
      </TodaysCard>
      <TodaysCard>
        <h2>wind:</h2>
        <h2>
          {windSpeed == "km"
            ? weather?.current?.wind_speed_10m.toFixed() + " km/h"
            : (weather?.current?.wind_speed_10m
                ? weather?.current?.wind_speed_10m * 0.621371
                : 0
              ).toFixed(1) + " mph"}
        </h2>
      </TodaysCard>
      <TodaysCard>
        <h2>precipitation: </h2>
        <h2>{weather?.current?.precipitation.toFixed()} mm</h2>
      </TodaysCard>
      </div>
  )
}
