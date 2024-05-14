import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import view from "../screens/Auth/First";
import React from "react";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignScreen from "../screens/Auth/SignUp";
import HomeScreen from "../screens/Main/Home";
import AddScreen from "../screens/Create/AddItem";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer className="bg-gray-900">
      <Stack.Navigator>
        <Stack.Screen
          name="first screen  with auora"
          component={view}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
