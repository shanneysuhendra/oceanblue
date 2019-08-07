import React from "react";
import { View, Text, Button } from "react-native";
import HomeScreen from "../screens/HomeScreen";

export default function StatsFactsScreen(props) {
  return (
    <View>
      <Text>
        A plastic bottle can last for 450 years in the marine environment
        Atleast two thirds of the world’s fish stocks are suffering from plastic
        ingestion A turtle has 22% chance of dying if it eats just one piece of
        plastic The weight of all the plastic produced worldwide is equivalent
        to the weight of more than 800,000 Eiffel Towers The average person
        eats70,000 microplastics each year
      </Text>
    </View>
  );
}
StatsFactsScreen.navigationOptions = {
  title: "Facts"
};
