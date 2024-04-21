import moment from "moment";
import _ from "lodash";

export function findDailyTemperatureExtremes(data) {
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const todayForecasts = data.list.filter((item) =>
    item.dt_txt.startsWith(todayStr)
  );

  const lowestTemp = _.minBy(todayForecasts, (item) => item.main.temp_min).main
    .temp_min;

  const highestTemp = _.maxBy(todayForecasts, (item) => item.main.temp_max).main
    .temp_max;

  return {
    lowestTemp,
    highestTemp,
  };
}

export function findClosestWeatherForecast(data) {
  const now = Math.floor(Date.now() / 1000);

  const closestForecast = _.minBy(data.list, (item) => {
    return Math.abs(item.dt - now);
  });

  return closestForecast;
}
export function getDailyTemperatureExtremes(data) {
  const groupedByDay = _.groupBy(data.list, (item) =>
    item.dt_txt.substring(0, 10)
  );

  const dailyExtremes = _.mapValues(groupedByDay, (forecasts) => {
    const lowestTemp = _.minBy(forecasts, (forecast) => forecast.main.temp_min)
      .main.temp_min;
    const highestTemp = _.maxBy(forecasts, (forecast) => forecast.main.temp_max)
      .main.temp_max;
    return { lowestTemp, highestTemp };
  });

  return dailyExtremes;
}
export const getNoonWeatherItems = (weatherData) => {
  return weatherData.list.filter((item) => {
    return moment(item.dt_txt).hour() === 12;
  });
};

export const getWeatherAssets = (iconCode) => {
  let assets = {
    backgroundImage: null,
    icon: null,
  };

  const defaultIconPath = "../../assets/weathericons";
  const defaultBgPath = "../../assets/weatherbackground";

  switch (iconCode) {
    case "01d":
      assets.icon = require(`${defaultIconPath}/01d.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg01d.png`);
      break;
    case "01n":
      assets.icon = require(`${defaultIconPath}/01n.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg01n.png`);
      break;
    case "02d":
      assets.icon = require(`${defaultIconPath}/02d.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg02d.png`);
      break;
    case "02n":
      assets.icon = require(`${defaultIconPath}/02n.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg02n.png`);
      break;
    case "03d":
      assets.icon = require(`${defaultIconPath}/03d.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg03d.png`);
      break;
    case "03n":
      assets.icon = require(`${defaultIconPath}/03n.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg03n.png`);
      break;
    case "04d":
      assets.icon = require(`${defaultIconPath}/03d.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg03d.png`);
      break;
    case "04n":
      assets.icon = require(`${defaultIconPath}/03n.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg03n.png`);
      break;
    case "09d":
      assets.icon = require(`${defaultIconPath}/10d.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg10d.png`);
      break;
    case "09n":
      assets.icon = require(`${defaultIconPath}/10n.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg10n.png`);
      break;
    case "10d":
      assets.icon = require(`${defaultIconPath}/10d.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg10d.png`);
      break;
    case "10n":
      assets.icon = require(`${defaultIconPath}/10n.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg10n.png`);
      break;
    case "11d":
      assets.icon = require(`${defaultIconPath}/11d.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg11d.png`);
      break;
    case "11n":
      assets.icon = require(`${defaultIconPath}/11n.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg11n.png`);
      break;
    case "13d":
      assets.icon = require(`${defaultIconPath}/10d.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg10d.png`);
      break;
    case "13n":
      assets.icon = require(`${defaultIconPath}/10n.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg10n.png`);
      break;
    case "50d":
      assets.icon = require(`${defaultIconPath}/10d.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg10d.png`);
      break;
    case "50n":
      assets.icon = require(`${defaultIconPath}/10n.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg10n.png`);
      break;
    default:
      assets.icon = require(`${defaultIconPath}/01d.png`);
      assets.backgroundImage = require(`${defaultBgPath}/bg01d.png`);
      break;
  }
  return assets;
};

export const kelvinToCelsius = (kelvin) => {
  const celcius = kelvin - 273.15;
  return celcius.toFixed(0);
};

export const kelvinToCelsiusString = (kelvin) => {
  const celcius = kelvinToCelsius(kelvin);
  return `${celcius}°C`;
};

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatter.format(date);
};

export const formatAndShortenDay = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );

  return dayName.slice(0, 3);
};
