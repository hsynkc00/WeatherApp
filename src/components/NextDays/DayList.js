import { View } from "react-native";
import React from "react";
import Day from "./Day";
import { formatAndShortenDay } from "../../helper/weather";

function renderDayItem(dt, temp_max, temp_min, icon, index) {
  const day = formatAndShortenDay(dt);

  return (
    <Day
      key={index}
      highTemp={temp_max}
      lowTemp={temp_min}
      iconCode={icon}
      day={day}
    />
  );
}

const DayList = ({ data = [], dailyTemps = [] }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", padding: 12 }}>
      {data?.map((item, index) => {
        return renderDayItem(
          item?.dt,
          dailyTemps[index].highestTemp,
          dailyTemps[index].lowestTemp,
          item?.weather?.[0]?.icon,
          index
        );
      })}
    </View>
  );
};

export default DayList;
