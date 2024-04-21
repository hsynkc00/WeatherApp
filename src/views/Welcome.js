import { View, ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import React, { useCallback, useState } from "react";
import AppLogo from "../../assets/svg/AppLogo";
import Text from "../components/Text/Text";
import Input from "../components/Input";
import LinkButton from "../components/LinkButton/LinkButton";
import { colors } from "../styles/colors";
import CityList from "../components/CityList/CityList";
import _ from "lodash";

import { getAddress, getCities, getForecast } from "../http/weather";
import { handleError } from "../helper/http";
import { getCurrentLocation } from "../helper/location";
import { showLocationPermissionAlert } from "../helper/permission";
import { getCountryName } from "../helper/countryName";

const Welcome = ({ navigation }) => {
  const [locations, setLocations] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleChangeInputDebounced = useCallback(
    _.debounce((text) => {
      if (!text.trim()) {
        setLocations([]);
        return;
      }
      getCities(text)
        .then((response) => {
          console.log(response);
          const list = response?.data?.map((item) => {
            return {
              label: `${item.name}, ${getCountryName(item.country)}`,
              value: `${item.lat}-${item.lon}`,
              lat: item.lat,
              lon: item.lon,
            };
          });
          setLocations(list);
        })
        .catch((error) => {
          handleError(error);
          setLocations([]);
        });
    }, 700),
    []
  );

  const handleGetAddress = () => {
    getCurrentLocation()
      .then((locations) => {
        setLoader(true);

        getAddress(locations.lat, locations.lon)
          .then((response) => {
            const list = response?.data?.map((item) => {
              return {
                label: item.name,
                value: `${item.lat}-${item.lon}`,
                lat: item.lat,
                lon: item.lon,
              };
            });
            setLocations(list);
          })
          .catch((error) => {
            handleError(error);
          })
          .finally(() => {
            setLoader(false);
          });
      })
      .catch(showLocationPermissionAlert);
  };

  const handleSelect = (selectedItem) => {
    setSelectedCity(selectedItem);
    setLoader(true);
    getForecast(selectedItem.lat, selectedItem.lon)
      .then((response) => {
        setSelectedCity(null);
        setLocations([]);
        navigation.navigate("Home", {
          weatherConditions: response.data,
          cityName: selectedItem?.label,
        });
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const renderCityList = () => {
    if (!locations || !locations?.length) {
      return null;
    }
    return <CityList locations={locations} onPress={handleSelect} />;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.image}
        resizeMode="cover"
      >
        <SafeAreaView />
        <View style={styles.logo}>
          <AppLogo />
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.textContainer}>
            <Text category="H4" style={{ color: colors.gray_100 }}>
              Welcome to
              <Text style={{ color: colors.blue_light }}> TypeWeather</Text>
            </Text>
            <Text category="P3" style={{ color: colors.gray_200 }}>
              Choose a location to see the weather forecast
            </Text>
          </View>
          <View>
            <Input
              value={selectedCity?.label || null}
              onChangeText={
                selectedCity?.label ? null : handleChangeInputDebounced
              }
              isLoading={loader}
              editable={!loader}
            />
            {selectedCity?.label ? null : renderCityList()}
          </View>
          <LinkButton
            onPress={handleGetAddress}
            category="P2"
            text="Show my current location"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontFamily: "Nunito",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  image: {
    flex: 1,
    paddingHorizontal: 32,
  },
  logo: {
    alignItems: "center",
  },
});
