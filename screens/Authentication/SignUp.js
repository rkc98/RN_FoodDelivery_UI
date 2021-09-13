import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FormInput from "../../components/FormInput";
import TextButton from "../../components/TextButton";
import TextIconButton from "../../components/TextIconButton";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import utils from "../../utils/Utils";
import AuthLayout from "./AuthLayout";
const SignUp = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [showPass, setshowPass] = useState(false);
  const [userName, setuserName] = useState("");
  const [userNameError, setuserNameError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  return (
    <AuthLayout
      title="Getting Started"
      subtitle="Create an account to continue!"
      titleContainerStyle={{
        marginTop: SIZES.radius,
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
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
        <FormInput
          label="UserName"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            // utils.validateEmail(value, setemailError);
            setuserName(value);
          }}
          errorMsg={userNameError}
          appendComponents={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  userName == "" || (userName != "" && userNameError == "")
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    userName == ""
                      ? COLORS.gray
                      : userName !== "" && userNameError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <FormInput
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            utils.validatePassword(value, setpasswordError);
            setpassword(value);
          }}
          errorMsg={passwordError}
          appendComponents={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => setshowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />

        <TextButton
          label="Sign Up"
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => navigation.navigate("Otp")}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body3,
            }}
          >
            Already have an account?
          </Text>
          <TextButton
            label="Sign In"
            buttonContainerStyle={{
              marginLeft: 3,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        {/* Facebook login  */}
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: COLORS.white,
          }}
          label="Continue with facebook"
          labelStyle={{
            marginLeft: SIZES.radius,
            color: COLORS.white,
          }}
          onPress={() => console.log("FaceBook")}
        />

        {/* Google Login  */}
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            marginTop: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: COLORS.red,
          }}
          label="Continue with Google"
          labelStyle={{
            marginLeft: SIZES.radius,
          }}
          onPress={() => console.log("Google")}
        />
      </View>
    </AuthLayout>
  );
};

export default SignUp;
