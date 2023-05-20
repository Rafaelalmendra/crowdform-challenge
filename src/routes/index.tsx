import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// routes
import { StackRoutes } from "./stack.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
