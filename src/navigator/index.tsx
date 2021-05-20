import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutes } from "./appRoutes";
import Test from "../screens/Test";

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={AppRoutes.APP}>
      <Stack.Screen name="home" component={Test}></Stack.Screen>
    </Stack.Navigator>
  );
};
