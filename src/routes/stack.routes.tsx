import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import { HomeScreen, SignInScreen, SignUpScreen } from "screens";

const { Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
    </Navigator>
  );
};
