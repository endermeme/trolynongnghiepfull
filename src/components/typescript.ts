// src/types.ts
export interface CurrentWeather {
  date: Date;
  weather: string;
  temperature: number;
  humidity: number;
  wind: number;
}

export interface ForecastWeather {
  date: string;
  weather: string;
  temperature: number;
  humidity: number;
  wind: number;
}

export interface WeatherInfo {
  current: CurrentWeather;
  forecast: ForecastWeather[];
}
