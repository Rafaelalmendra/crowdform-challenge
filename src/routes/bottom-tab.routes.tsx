import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import { AssetScreen, HomeScreen } from "screens";

// styles
import theme from "styles/theme";

// icons
import { House, ArrowsLeftRight, ChartPieSlice } from "phosphor-react-native";

const BottomTabRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  const screenWeight = (color: string) => {
    if (color === theme.colors.purple) {
      return "fill";
    }

    return "regular";
  };

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme.colors.white,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.purple,
        tabBarHideOnKeyboard: true,
        tabBarBadgeStyle: {
          top: 15,
          backgroundColor: theme.colors.purple,
          color: "#6D6D6D",
          fontSize: 10,
          fontFamily: theme.fonts.bold,
        },
        tabBarStyle: {
          height: 63.36,
          backgroundColor: theme.colors.white,
          paddingHorizontal: 10,
          borderTopColor: "#F3F3F3",
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <House
              size={24}
              color={props.color}
              weight={screenWeight(props.color)}
            />
          ),
        }}
      />

      <Screen
        name="Trade"
        component={AssetScreen}
        options={{
          tabBarIcon: (props) => (
            <ArrowsLeftRight
              size={24}
              color={props.color}
              weight={screenWeight(props.color)}
            />
          ),
        }}
      />

      <Screen
        name="Portfolio"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <ChartPieSlice
              size={24}
              color={props.color}
              weight={screenWeight(props.color)}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export { BottomTabRoutes };
