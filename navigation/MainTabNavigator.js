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
import StatsScreen from "../screens/StatsScreen";

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

const StatsStack = createStackNavigator(
  {
    Stats: StatsScreen
  },
  config
);

StatsStack.navigationOptions = {
  tabBarLabel: "Stats",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-stats" : "md-stats"}
    />
  )
};

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

StatsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ActionStack,
  StatsStack,
  ShopStack
});

tabNavigator.path = "";

export default tabNavigator;
