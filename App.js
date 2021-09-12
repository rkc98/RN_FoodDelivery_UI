import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";

import { OnBoarding, SignIn, SignUp, ForgotPassword, Otp } from "./screens";
import { useFonts } from "@use-expo/font";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

const App = () => {
  // React.useEffect(() => {
  //     SplashScreen.hide();
  // }, [])
  let [isLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"OnBoarding"}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />

        <Stack.Screen name="SignIn" component={SignIn} />

        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
