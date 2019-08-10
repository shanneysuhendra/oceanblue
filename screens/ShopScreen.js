import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Card,
  Text,
  Button,
  Icon,
  Left,
  List,
  ListItem
} from "react-native-elements";
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

export default function ShopScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View />
    </ScrollView>
  );
}

ShopScreen.navigationOptions = {
  title: "SHOP",
  headerStyle: {
    backgroundColor: "#588bae"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "800",
    fontFamily: "Verdana"
  }
};

function renderItem({ item }) {
  return (
    <Image
      source={item.image}
      resizeMode="cover"
      style={styles.carouselImages}
    />
  );
}

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5"
  }
});
