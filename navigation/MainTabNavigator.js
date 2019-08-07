import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import StatsScreen from "../screens/StatsScreen";
import StatsFactsScreen from "../screens/StatsFactsScreen";
import ActionScreen from "../screens/ActionScreen";
import ShopScreen from "../screens/ShopScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: "Home"
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

const StatsStack = createStackNavigator(
  {
    Stats: StatsScreen,
    Statss: StatsFactsScreen
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

StatsStack.path = "";

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
  StatsStack,
  ActionStack,
  ShopStack
});

tabNavigator.path = "";

export default tabNavigator;
