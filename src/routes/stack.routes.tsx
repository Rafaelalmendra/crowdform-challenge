import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { HomeScreen, SignInScreen, SignUpScreen } from "screens";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
    </Navigator>
  );
};
