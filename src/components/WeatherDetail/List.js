import { StyleSheet, View } from "react-native";
import Item from "./Item";
import { colors } from "../../styles/colors";

function List({ data }) {
  function renderDetailItem(item, index) {
    const isLastItem = index === data?.length - 1;

    return (
      <Item
        key={index}
        style={isLastItem ? null : styles.borderBottom}
        {...item}
      />
    );
  }

  return (
    <View style={{ flex: 1, padding: 12 }}>{data?.map(renderDetailItem)}</View>
  );
}

export default List;

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_700,
  },
});
