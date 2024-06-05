import React, { useEffect, useState } from "react";
import { FaLocationDot, FaTemperatureHalf } from "react-icons/fa6";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import IconBox from "../utils/IconBox";
import WeatherForecastBadge from "./WeatherForecastBadge";
import * as wt from "../utils/weather_fetching";
import { weatherDescriptions } from "../utils/weatherDescriptions";

export default function WeatherForecast() {
  const [weatherInfo, setWeatherInfo] = useState<{ current: any; forecast: any[]; } | null | undefined>(null);
  const svg_size = 100;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await wt.fetchWeather();
        if (data !== undefined) {
          setWeatherInfo(data);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchData();
  }, []);

  if (!weatherInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex lg:flex-row flex-col p-2 bg-white rounded-xl grow shadow-slate-300 shadow-md">
      <div className="flex items-center rounded-xl justify-center gap-8 grow lg:gap-24 mx-8">
        <div className="flex flex-col justify-start">
          {weatherInfo && (
            <IconBox>
              <FaLocationDot size={16} /> Thái Bình
            </IconBox>
          )}
          {weatherInfo && (
            <IconBox>
              <FaTemperatureHalf size={16} /> {Math.floor(weatherInfo.current.temperature)} °C
            </IconBox>
          )}
          {weatherInfo && (
            <IconBox>
              <WiStrongWind size={16} /> {weatherInfo.current.wind} m/s
            </IconBox>
          )}
          {weatherInfo && (
            <IconBox>
              <WiHumidity size={16} /> {weatherInfo.current.humidity} %
            </IconBox>
          )}
        </div>
        <div className="flex items-center">
          {weatherInfo && (
            <img src={weatherDescriptions[weatherInfo.current.weather]?.svg_src} width={svg_size} height={svg_size} alt="Weather Icon" />
          )}
          {weatherInfo && (
            <h1>{weatherDescriptions[weatherInfo.current.weather]?.name}</h1>
          )}
        </div>
      </div>
      <div className="flex flex-row flex-nowrap justify-center gap-2">
        {weatherInfo && (
          weatherInfo.forecast.map((forecast: { temperature: number; weather: any; date: string }, index: number) => (
            <WeatherForecastBadge
              key={index}
              temp={forecast.temperature}
              status={forecast.weather}
              date={forecast.date}
            />
          ))
        )}
      </div>
    </div>
  );
}
