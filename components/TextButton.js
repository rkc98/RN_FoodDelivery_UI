import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { constants, images, FONTS, SIZES, COLORS } from "../constants";

const TextButton = ({ buttonContainerStyle, label, labelStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,

        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({});
