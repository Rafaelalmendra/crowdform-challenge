import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// routes
import { BottomTabRoutes } from "./bottom-tab.routes";

// screens
import { SignInScreen, SignUpScreen } from "screens";

const { Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="BottomTab" component={BottomTabRoutes} />
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
    </Navigator>
  );
};
