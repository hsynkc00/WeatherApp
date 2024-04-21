import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import Text from "../Text/Text";

const CityList = ({ locations, onPress }) => {
  const renderSeparatorComponent = () => {
    return <View style={{ height: 1, backgroundColor: "#1E1E29" }} />;
  };

  const handleOnPress = (item) => {
    if (onPress) {
      onPress(item);
    }
  };

  const renderLocationItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleOnPress(item)}
      style={styles.locationItem}
    >
      <Text category="P2" style={{ color: "white" }}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        renderItem={renderLocationItem}
        ItemSeparatorComponent={renderSeparatorComponent}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.value}
      />
    </View>
  );
};

export default CityList;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: colors.gray_500,
    maxHeight: 108,
    marginTop: 8,
  },
  locationItem: {
    height: 54,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
