import { View, ImageBackground, StyleSheet, Image } from "react-native";
import Text from "../Text/Text";
import React from "react";
import { getWeatherAssets, kelvinToCelsiusString } from "../../helper/weather";

const Card = ({ cityName, date, todayTemp, maxTemp, minTemp, iconCode }) => {
  const assets = getWeatherAssets(iconCode);

  return (
    <View style={styles.card}>
      <ImageBackground
        source={assets.backgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 8 }}
      >
        <View style={styles.todayContainer}>
          <Text category="H5">{cityName}</Text>
          <Text category="C1">{date}</Text>
        </View>

        <View style={styles.temperatureContainer}>
          <Text category="H2">{kelvinToCelsiusString(todayTemp)}</Text>
          <View>
            <Text category="H5">{kelvinToCelsiusString(maxTemp)}</Text>
            <Text category="H6">{kelvinToCelsiusString(minTemp)}</Text>
          </View>
        </View>
        <Image source={assets.icon} style={styles.sunImage} />
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 12,
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: 304,
  },
  todayContainer: {
    flex: 1,
    padding: 20,
  },
  temperatureContainer: {
    paddingLeft: 16,
    paddingBottom: 16,
  },
  sunImage: {
    width: 160,
    height: 160,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
