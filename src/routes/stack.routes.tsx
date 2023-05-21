import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import { AssetScreen, HomeScreen, SignInScreen, SignUpScreen } from "screens";

const { Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
        navigationKey="Home"
      />
      <Screen
        name="Asset"
        component={AssetScreen}
        options={{
          title: "Asset",
        }}
        navigationKey="Asset"
      />
      <Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: "Sign In",
        }}
      />
      <Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: "Sign Up",
        }}
      />
    </Navigator>
  );
};
