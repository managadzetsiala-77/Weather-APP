export type City = {
  country: string;
  name: string;
};

export type Weather = {
  daily: {
    time: [];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };

  current: {
    temperature_2m: number;
    apparent_temperature: number;
    precipitation: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };

  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
};
