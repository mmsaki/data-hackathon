import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Settings from "./Settings";
import { Routes } from "./router";
import Details from "./Details";
import { Button, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator<Routes>();
const Drawer = createDrawerNavigator<Routes>();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen
            name='Details'
            component={Details}
            options={({ route }) => ({
              headerRight: () => {
                return <Button title='Buy' onPress={() => {}} disabled={route.params.stock === 0} />;
              },
            })}
          />
          <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
      )}
      {Platform.OS === "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen
            name='Details'
            component={Details}
            options={({ route }) => ({
              headerRight: () => {
                return <Button title='Buy' onPress={() => {}} disabled={route.params.stock === 0} />;
              },
            })}
          />
          <Drawer.Screen name='Settings' component={Settings} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
