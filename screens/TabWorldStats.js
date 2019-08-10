import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-elements";

export default function TabWorldStats() {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.h2}>
          Every year, more than 8 million metric tons of plastics enter our
          ocean on top of the estimated 150 million metric tons that currently
          circulate our marine environments and only 9% of it has been recycled.
        </Text>
      </Card>
      <Card>
        <Text style={styles.h2}>
          8.3 billion plastic straws pollute the world’s beaches and yet, straws
          only comprises 0.025% of the plastic that flow into the ocean every
          year
        </Text>
      </Card>
      <Card>
        <Text style={styles.h2}>
          100,000 marine mammals and turtles and more than 1 million seabirds
          are killed by marine plastic pollution annually
        </Text>
      </Card>
      <Card>
        <Text style={styles.h2}>
          The top 5 polluting countries (China, Indonesia, Philippines, Vietnam
          and Sri Lanka) represent approximately 60% of all ocean plastics
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5"
  },
  h2: {
    fontSize: 15,
    paddingTop: 5,
    textAlign: "justify"
  }
});
