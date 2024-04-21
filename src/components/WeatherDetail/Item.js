import { View, StyleSheet } from "react-native";
import Text from "../Text/Text";
import React from "react";
import { colors } from "../../styles/colors";

const Item = ({ label, value, IconComp,style }) => {
  return (
    <View style={[styles.container,style]}>
      <View style={styles.titleContainer}>
        <IconComp size={24} color={colors.gray_500} weight='light' />
        <Text category="H6" style={styles.label}>
          {label}
        </Text>
      </View>
      <Text category="H5" style={styles.text}>
        {value}
      </Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: colors.gray_800,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  text: {
    color: colors.white,
  },
  label: {
    marginLeft: 12,
    color: colors.gray_200,
  },
});
