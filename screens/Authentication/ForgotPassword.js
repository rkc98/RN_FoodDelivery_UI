import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FormInput from "../../components/FormInput";
import TextButton from "../../components/TextButton";
import TextIconButton from "../../components/TextIconButton";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import utils from "../../utils/Utils";
import AuthLayout from "./AuthLayout";

const ForgotPassword = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState("");

  return (
    <AuthLayout
      title="Password Recovery"
      subtitle="Please enter your email address to recover your password"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}
    >
      <FormInput
        label="Email"
        keyboardType="email-address"
        autoCompleteType="email"
        onChange={(value) => {
          utils.validateEmail(value, setemailError);
          setemail(value);
        }}
        errorMsg={emailError}
        appendComponents={
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <Image
              source={
                email == "" || (email != "" && emailError == "")
                  ? icons.correct
                  : icons.cross
              }
              style={{
                height: 20,
                width: 20,
                tintColor:
                  email == ""
                    ? COLORS.gray
                    : email !== "" && emailError == ""
                    ? COLORS.green
                    : COLORS.red,
              }}
            />
          </View>
        }
      />

      <TextButton
        label="Send Email"
        buttonContainerStyle={{
          height: 55,
          alignItems: "center",
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        onPress={() => navigation.goBack()}
      />
    </AuthLayout>
  );
};

export default ForgotPassword;
