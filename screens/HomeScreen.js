import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Carousel from "react-native-snap-carousel";

import { MonoText } from "../components/StyledText";

const entries = [
  { image: require("../assets/images/poll1.jpg") },
  { image: require("../assets/images/turtle1.jpg") },
  { image: require("../assets/images/poll2.jpg") },
  { image: require("../assets/images/turtle2.jpg") },
  { image: require("../assets/images/poll3.jpg") },
  { image: require("../assets/images/Whale.jpg") }
];

var { height, width } = Dimensions.get("window");
const fractionWidth = width * 0.75;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Carousel
        data={entries}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={fractionWidth}
        layout={"default"}
        inactiveSlideScale={0.95}
        slideStyle={styles.slideStyle}
        containerCustomStyle={styles.carousel}
      />
    </View>
  );
}

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
    backgroundColor: "#fff"
  },
  carousel: {
    paddingTop: 20
  },
  carouselImages: {
    height: 200,
    width: fractionWidth * 0.9
  },
  slideStyle: {
    shadowRadius: 8,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 10 },
    alignItems: "center"
  }
});
