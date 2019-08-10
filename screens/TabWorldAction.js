import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { Segment, Button, Text, Content, Accordion } from "native-base";
import { Card, Icon, List, ListItem } from "react-native-elements";
import TabIndoAction from "./TabIndoAction";
import TabWorldAction from "./TabWorldAction";
import Colors from "../constants/Colors";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { MonoText } from "../components/StyledText";

const dataArray = [
  {
    title: "BANS",
    content:
      "Several countries/areas all over the world have plastic bag bans or/and tax in place such as parts of Africa, Asia, North America, South America, Australia, Europe, etc. As of August 2017, Kenya implemented the world’s harshest plastic bag ban, in which those who are found using, producing, or selling a plastic bag faces up to four years in jail, or a $38,000 fine."
  },
  {
    title: "GLOBAL ALLIANCE",
    content:
      "A growing organization made up of nearly 30 companies from all over the world that make plastic, use plastics in their products and packaging, process plastics and recycle plastic waste, has committed to a goal of investing $1.5 billion over the next five years to help end plastic waste in the environment."
  }
];

function showFriend(friend) {
  return <SettingsDetailScreen friend={friend} />;
}
export default function ActionOwnScreen(props) {
  return (
    <View>
      <Accordion dataArray={dataArray} expanded={0} />
    </View>
  );
}
