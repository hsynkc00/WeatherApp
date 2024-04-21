import { Text as RNText } from "react-native";
import React from "react";
import { styles } from "./Text.styles";
import PropTypes from "prop-types";

const Styles = styles();

const Text = (props) => {
  const { category = "P1", style, children, ...remainingProps } = props;
  return (
    <RNText
      style={[Styles[category], style]}
      children={children}
      {...remainingProps}
    />
  );
};

Text.propTypes = {
  category: PropTypes.oneOf([
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "P1",
    "P2",
    "P3",
    "C1",
    "C2",
  ]),
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  children: PropTypes.node,
};

export default Text;
