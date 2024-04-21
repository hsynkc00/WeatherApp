import {
  ThermometerSimple,
  CloudRain,
  Wind,
  Drop,
  Sun,
} from "phosphor-react-native";
import { kelvinToCelsiusString } from "./weather";

export const getWeatherListDetail = ({ feelsLike, humidity, speed, pop }) => {
  return [
    {
      id: 1,
      IconComp: ThermometerSimple,
      label: "Thermal sensation",
      value: kelvinToCelsiusString(feelsLike),
    },
    {
      id: 2,
      IconComp: CloudRain,
      label: "Probability of rain",
      value: `${humidity}%`,
    },
    {
      id: 3,
      IconComp: Wind,
      label: "Wind speed",
      value: `${speed} m/s`,
    },
    {
      id: 4,
      IconComp: Drop,
      label: "Air humidity",
      value: `${humidity}%`,
    },
    {
      id: 5,
      IconComp: Sun,
      label: "UV Index",
      value: pop,
    },
  ];
};
