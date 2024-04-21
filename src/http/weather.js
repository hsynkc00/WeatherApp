import axios from "axios";

export const getForecast = (lat, lon) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;

  const adress = `${apiUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  return new Promise((resolve, reject) => {
    axios
      .get(adress)
      .then(function (response) {
        return resolve(response);
      })
      .catch(function (error) {
        return reject(error);
      });
  });
};

export const getAddress = (lat, lon) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;

  const adress = `${apiUrl}/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  return new Promise((resolve, reject) => {
    axios
      .get(adress)
      .then(function (response) {
        return resolve(response);
      })
      .catch(function (error) {
        return reject(error);
      });
  });
};

export const getCities = (cityName) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;

  const adress = `${apiUrl}/geo/1.0/direct?q=${cityName}&limit=4&appid=${apiKey}`;
  return new Promise((resolve, reject) => {
    axios
      .get(adress)
      .then(function (response) {
        return resolve(response);
      })
      .catch(function (error) {
        return reject(error);
      });
  });
};
