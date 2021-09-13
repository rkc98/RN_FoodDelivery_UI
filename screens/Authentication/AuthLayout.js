import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { constants, images, FONTS, SIZES, COLORS } from "../../constants";
const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingVertical: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        <KeyboardAwareScrollView
          keyboardDismissMode="on-drag"
          enableOnAndroid
          extraHeight={0}
          contentContainerStyle={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
          }}
        >
          {/* App Icon  */}
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Image
              source={images.logo_02}
              resizeMode="contain"
              style={{
                width: 200,
                height: 100,
              }}
            />
          </View>

          {/* Title & subtitle  */}
          <View
            style={{
              marginTop: SIZES.padding,
              ...titleContainerStyle,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                ...FONTS.h2,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: COLORS.darkGray,
                marginTop: SIZES.base,
                ...FONTS.body3,
              }}
            >
              {subtitle}
            </Text>
          </View>
          {/* content  */}
          {children}
        </KeyboardAwareScrollView>
      </View>
    </ScrollView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
