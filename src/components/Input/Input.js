import { TextInput, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import { SpinnerGap } from "phosphor-react-native";


const Input = ({
  placeholder,
  onChangeText,
  value,
  isLoading,
  editable = true,
}) => {
  return (
    <View>
      <TextInput
        autoCorrect={false}
        value={value}
        placeholder={placeholder}
        style={[styles.input, editable ? null : styles.disabled]}
        onChangeText={onChangeText}
        editable={editable}
      />
      {isLoading ? (
        <SpinnerGap size={32} style={styles.icon} color={colors.blue_light} />
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 18,
    fontFamily: "Nunito",
    color: colors.white,
    backgroundColor: colors.night_gray,
  },
  disabled: {
    color: colors.gray_100,
    opacity: 0.6,
  },
  icon: {
    position: "absolute",
    right: 23,
    top: 12,
  },
});
