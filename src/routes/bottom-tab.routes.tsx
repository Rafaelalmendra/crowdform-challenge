import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import { AssetScreen, HomeScreen, PortfolioScreen } from "screens";

// mocks
import { fundsMock } from "mocks";

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
        tabBarActiveTintColor: theme.colors.purple,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 68,
          paddingTop: 14,
          backgroundColor: theme.colors.white,
          borderTopColor: "#F3F3F3",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 12,
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <House
              size={22}
              color={props.color}
              weight={screenWeight(props.color)}
            />
          ),
        }}
      />

      <Screen
        name="Asset"
        component={AssetScreen}
        initialParams={{ fund: fundsMock[0] }}
        options={{
          tabBarIcon: (props) => (
            <ArrowsLeftRight
              size={22}
              color={props.color}
              weight={screenWeight(props.color)}
            />
          ),
        }}
      />

      <Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: (props) => (
            <ChartPieSlice
              size={22}
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
