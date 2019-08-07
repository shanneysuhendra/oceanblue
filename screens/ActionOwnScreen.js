import React from "react";
import { View, Text, Button } from "react-native";

export default function StatsFactsScreen(props) {
  return (
    <View>
      <Text style={styles.h0}>
        Remember, you don't have to be in an organization to create a change.
        Here are some tips that you can implement on your daily routine that
        could help make an impact.
      </Text>
      <Text style={styles.h1}>REDUCE</Text>
      <Text style={styles.h2}>Make it a habit to say no to plastic.</Text>
      <Text style={styles.h1}>REUCE</Text>
      <Text style={styles.h2}>
        Bring your own reusable bags to the markets, your own reusable bottles
        instead of buying water in plastic bottles, and your own reusable straws
        such as stainless steel straws or bamboo straws,etc. It's as easy as
        counting 1, 2, 3!
      </Text>
      <Text style={styles.h1}>RECYCLE</Text>
      <Text style={styles.h2}>
        Recycle the plastics you don't need. This not only helps reduce the
        amount of plastic dumped to the ocean but also reduce new plastics being
        made.
      </Text>
      <Text style={styles.h1}>RALLY</Text>
      <Text style={styles.h2}>
        Voice your thoughts on plastic pollution to others so that they can be
        aware of the situation and be a part of the solution. You can support
        organizations addressing plastic pollution by participating in local
        cleanups.{" "}
      </Text>
    </View>
  );
}
HomeScreen.navigationOptions = {
  title: "Take Your Own Actions"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AFDBF5"
  },
  h0: {
    fontSize: 15
  },
  h1: {
    fontWeight: "bold",
    fontSize: 16
  },
  h2: {
    fontSize: 14
  }
});
