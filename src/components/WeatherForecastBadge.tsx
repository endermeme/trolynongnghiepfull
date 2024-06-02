import { FaTemperatureHalf } from "react-icons/fa6";
import IconBox from "../utils/IconBox";
import { weatherDescriptions } from "../utils/weatherDescriptions";


interface WeatherInfo {
  status: string;
  temp?: number;
  date?: string
}


export default function WeatherForecastBadge(props: WeatherInfo) {
  return (
    <div className="bg-sky-300 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col justify-center items-center grow lg:w-36">
      <h3>{props.date}</h3>
      <img src={weatherDescriptions[props.status].svg_src} className="lg:w-16 lg:h-16 w-12 h-12"/>
      <h1 className="text-nowrap">{weatherDescriptions[props.status].name}</h1>
      <IconBox>
        <FaTemperatureHalf size={16} /> {props.temp && Math.floor(props.temp)} °C
      </IconBox>
    </div>
  );
}
