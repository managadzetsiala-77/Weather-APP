import type { Weather } from "../types/weather.types";
import TodaysCard from "./TodaysCard";

export default function TodaysList({weather, windSpeed}: {weather: Weather | null; windSpeed: string}) {

  // if (!weather) {
  //   return (
  //     <div className="grid grid-cols-4 gap-5 mt-8">
  //       {[1, 2, 3, 4].map((item) => (
  //         <div
  //           key={item}
  //           className="
  //             h-22.5
  //             rounded-2xl
  //             bg-[#24243D]
  //             animate-pulse
  //           "
            
  //         />
  //       ))}
        
  //     </div>
  //   );
  // }

  return (
    <div className="
grid
grid-cols-4
gap-4
mt-8
">  <TodaysCard>
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
