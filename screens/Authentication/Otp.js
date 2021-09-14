import React, { useEffect, useState } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FormInput from "../../components/FormInput";
import TextButton from "../../components/TextButton";
import TextIconButton from "../../components/TextIconButton";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import utils from "../../utils/Utils";
import AuthLayout from "./AuthLayout";

const Otp = () => {
  const [timer, settimer] = useState(60);
  useEffect(() => {
    let interval = setInterval(() => {
      settimer((prevtimer) => {
        if (prevtimer > 0) {
          return prevtimer - 1;
        } else {
          return prevtimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been sent to abc@gmail.com "
      titleContainerStyle={{
        marginTop: SIZES.radius,
      }}
    >
      {/* OTP inputs  */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        <OTPInputView
          pinCount={4}
          style={{
            width: "100%",
            height: 50,
          }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={(code) => {
            console.log(code);
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            Didn't recieve code?
          </Text>
          <TextButton
            label={`Resend (${timer}s)`}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => settimer(60)}
          />
        </View>
      </View>

      {/* Footer  */}

      <View>
        <TextButton
          label="Continue"
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => console.log("Continue")}
        />
        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            By Signing up, you agree to our.
          </Text>
          <TextButton
            label="Terms and Conditions"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.body3,
            }}
            onPress={() => console.log("TnC")}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
