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
    title: "BAN",
    content:
      "On December 21st 2018, Bali Governor, Wayan Koster, announced a ban on single-use plastic in Bali, with a six month “warm up” period to give businesses time to react. As of June 23rd 2019, the bill was officially instated, resulting to Bali becoming the first province to officially ban all single use of dreaded styrofoam, plastic bags and plastic straws."
  },
  {
    title: "PROGRAM",
    content:
      "A pilot program in 2016 was introduced to charge an IDR200 (US$0.01) levy on plastic shopping bags in 23 cities. However, the program stopped when participating retailers refused to continue the program beyond the trial period on the basis that charging customers for bags had no legal basis. Still, the Indonesian government pledge to reduce 70 percent of its marine waste by 2025, along with up to US$1 billion annually to fund the actions required to achieve this target."
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
