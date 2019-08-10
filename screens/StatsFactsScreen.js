import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";

export default function StatsFactsScreen(props) {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.h2}>
          A plastic bottle can last for 450 years in the marine environment
        </Text>
      </Card>
      <Card>
        <Text style={styles.h2}>
          At least two thirds of the world’s fish stocks are suffering from
          plastic ingestion
        </Text>
      </Card>
      <Card>
        <Text style={styles.h2}>
          A turtle has 22% chance of dying if it eats just one piece of plastic
        </Text>
      </Card>
      <Card>
        <Text style={styles.h2}>
          The weight of all the plastic produced worldwide is equivalent to the
          weight of more than 800,000 Eiffel Towers
        </Text>
      </Card>
      <Card>
        <Text>The average person eats70,000 microplastics each year</Text>
      </Card>
    </View>
  );
}
StatsFactsScreen.navigationOptions = {
  title: "FACTS",
  headerStyle: {
    backgroundColor: "#588bae"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "800",
    fontFamily: "Verdana"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5"
  },
  h0: {
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  h1: {
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 20
  },
  h2: {
    fontSize: 14,
    paddingLeft: 15
  }
});
