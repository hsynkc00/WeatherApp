import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = () => {
  const defaultStyles = StyleSheet.create({
    default: {
      color: colors.white,
    },
  });

  return StyleSheet.create({
    H1: {
      fontSize: 96,
      fontFamily: "Nunito-ExtraBold",
      ...defaultStyles.default,
    },
    H2: {
      fontSize: 48,
      lineHeight: 57.6,
      fontFamily: "Nunito-ExtraBold",
      ...defaultStyles.default,
    },
    H3: {
      fontSize: 32,
      lineHeight: 44.8,
      fontFamily: "Nunito-Bold",
      ...defaultStyles.default,
    },
    H4: {
      fontSize: 20,
      lineHeight: 28,
      fontFamily: "Nunito-Bold",
      ...defaultStyles.default,
    },
    H5: {
      fontSize: 16,
      lineHeight: 22.4,
      fontFamily: "Nunito-Bold",
      ...defaultStyles.default,
    },
    H6: {
      fontSize: 14,
      lineHeight: 19.6,
      fontFamily: "Nunito-Bold",
      ...defaultStyles.default,
    },
    P1: {
      fontSize: 20,
      lineHeight: 28,
      fontFamily: "Nunito-Regular",
      ...defaultStyles.default,
    },
    P2: {
      fontSize: 16,
      lineHeight: 22.4,
      fontFamily: "Nunito-Regular",
      ...defaultStyles.default,
    },
    P3: {
      fontSize: 14,
      lineHeight: 19.6,
      fontFamily: "Nunito-Regular",
      ...defaultStyles.default,
    },
    C1: {
      fontSize: 12,
      lineHeight: 19.6,
      fontFamily: "Nunito-Regular",
      ...defaultStyles.default,
    },
    C2: {
      fontSize: 12,
      lineHeight: 16.8,
      fontFamily: "Nunito-Bold",
      ...defaultStyles.default,
    },
  });
};
