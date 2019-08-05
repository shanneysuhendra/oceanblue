import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ActionScreen from "../screens/ActionScreen";
import ShopScreen from "../screens/ShopScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};

HomeStack.path = "";

const ActionStack = createStackNavigator(
  {
    Action: ActionScreen
  },
  config
);

ActionStack.navigationOptions = {
  tabBarLabel: "Action",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-globe" : "md-globe"}
    />
  )
};

ActionStack.path = "";

const ShopStack = createStackNavigator(
  {
    Shop: ShopScreen
  },
  config
);

ShopStack.navigationOptions = {
  tabBarLabel: "Shop",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-basket" : "md-basket"}
    />
  )
};

ShopStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ActionStack,
  ShopStack
});

tabNavigator.path = "";

export default tabNavigator;
