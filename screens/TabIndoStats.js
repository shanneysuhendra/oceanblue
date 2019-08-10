import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";

export default function TabWorldStats() {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.h1}>
          INDONESIA IS THE WORLD'S SECOND LARGEST CONTRIBUTOR TO PLASTIC
          POLLUTION
        </Text>
        <Text style={styles.h2}>
          An estimate of 3.2 million metric tons of plastic waste tossed
          annually in the ocean surrounding Indonesia
        </Text>
      </Card>
      <Card>
        <Text style={styles.h1}>
          THE TOP 20 MOST POLLUTING RIVERS IN THE WORLD INCLUDED 4 INDONESIA
          RIVERS
        </Text>
        <Text style={styles.h2}>Rank &nbsp; 6: Brantas</Text>
        <Text style={styles.h2}>Rank 10: Solo</Text>
        <Text style={styles.h2}>Rank 14: Serayu</Text>
        <Text style={styles.h2}>Rank 19: Progo</Text>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5"
  },
  h1: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "justify"
  },
  h2: {
    fontSize: 14,
    paddingTop: 5,
    textAlign: "justify"
  }
});
