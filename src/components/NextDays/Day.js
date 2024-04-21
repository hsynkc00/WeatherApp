import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../Text/Text";
import { colors } from "../../styles/colors";
import { getWeatherAssets, kelvinToCelsiusString } from "../../helper/weather";

const Day = ({ day, highTemp, lowTemp, iconCode }) => {
  const backgroundImage = getWeatherAssets(iconCode).icon;
  return (
    <View style={styles.container}>
      <Text category="H6" style={styles.dayText}>
        {day}
      </Text>
      <Image source={backgroundImage} style={styles.image} />
      <View style={styles.temperatures}>
        <Text category="H6" style={styles.highTemp}>
          {kelvinToCelsiusString(highTemp)}
        </Text>
        <Text category="H6" style={styles.lowTemp}>
          {kelvinToCelsiusString(lowTemp)}
        </Text>
      </View>
    </View>
  );
};

export default Day;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dayText: {
    color: colors.gray_200,
  },
  image: {
    width: "100%",
    height: 56,
    paddingHorizontal: 5.5,
    marginBottom: 4,
  },
  temperatures: {
    alignItems: "center",
  },
  highTemp: {
    color: colors.white,
  },
  lowTemp: {
    color: colors.gray_400,
  },
});
