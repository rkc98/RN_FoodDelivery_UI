import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { constants, images, FONTS, SIZES, COLORS } from "../constants";
const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponents,
  appendComponents,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errorMsg = "",
}) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            color: COLORS.red,
            ...FONTS.body4,
          }}
        >
          {errorMsg}
        </Text>
      </View>
      {/* TextInput  */}
      <View
        style={{
          flexDirection: "row",
          height: 55,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {prependComponents}

        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
          }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChange={(text) => onChange(text)}
        />

        {appendComponents}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});
