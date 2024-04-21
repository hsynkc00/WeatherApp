import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";

import {
  findClosestWeatherForecast,
  findDailyTemperatureExtremes,
  formatTimestamp,
  getDailyTemperatureExtremes,
  getNoonWeatherItems,
} from "../helper/weather";

import Card from "../components/Card";

import List from "../components/WeatherDetail";

import DayList from "../components/NextDays/DayList";
import { colors } from "../styles/colors";
import { getWeatherListDetail } from "../helper/details";

const Home = ({ route }) => {
  const { cityName, weatherConditions } = route.params;
  const currentWeather = findClosestWeatherForecast(weatherConditions);
  const extremeTemp = findDailyTemperatureExtremes(weatherConditions);
  const noonWeather = getNoonWeatherItems(weatherConditions);
  const dailyTemps = Object.values(
    getDailyTemperatureExtremes(weatherConditions)
  );

  const timestap = currentWeather?.dt;
  const date = formatTimestamp(timestap);

  const info = getWeatherListDetail({
    feelsLike: currentWeather.main.feels_like,
    humidity: currentWeather.main.humidity,
    speed: currentWeather.wind.speed,
    pop: currentWeather.pop,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <Card
            cityName={cityName}
            date={date}
            todayTemp={currentWeather.main.temp}
            maxTemp={extremeTemp.highestTemp}
            minTemp={extremeTemp.lowestTemp}
            iconCode={currentWeather.weather[0].icon}
          />
        </View>
        <View style={styles.list}>
          <List data={info} />
        </View>

        <View style={styles.nextDays}>
          <DayList data={noonWeather} dailyTemps={dailyTemps} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray_900,
  },
  contentContainer: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: colors.gray_800,
    margin: 8,
    borderRadius: 12,
  },
  list: {
    backgroundColor: colors.gray_800,
    margin: 8,
    borderRadius: 12,
  },
  nextDays: {
    flex: 1,
    backgroundColor: colors.gray_800,
    margin: 8,
    borderRadius: 12,
  },
});
