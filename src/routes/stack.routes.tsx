import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import { SignInScreen } from "screens";

const { Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignInScreen} />
    </Navigator>
  );
};
