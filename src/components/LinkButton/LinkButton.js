import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import Text from "../Text/Text";

const LinkButton = ({ onPress, category, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text category={category} style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: colors.gray_400,
    textDecorationLine: "underline",
    fontSize: 14,
  },
});

export default LinkButton;
