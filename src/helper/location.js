import * as Location from "expo-location";

export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    Location.requestForegroundPermissionsAsync().then((response) => {
      if (response.status !== "granted") {
        return reject();
      }

      Location.getCurrentPositionAsync({})
        .then((location) => {
          return resolve({
            lat: location.coords.latitude,
            lon: location.coords.longitude,
          });
        })
        .catch(reject);
    });
  });
