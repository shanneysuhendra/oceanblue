import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Card,
  Text,
  Button,
  Icon,
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

export default function HomeScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 250 }}>
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
      <Card style={styles.card}>
        <Text style={styles.h1}>ABOUT US</Text>
        <Text style={styles.h2}>
          Ocean Blue is a non-profit project which is based on the need of
          change with regards to the use of non-reusable plastics in Indonesia.
          With Indonesia being one of the top plastic polluters, we realized
          that this problem is bigger than we realize and thus, we decided to
          take an action now before it is too late.
        </Text>
      </Card>
      <Card>
        <Text style={styles.h1}>MISSION</Text>
        <Text style={styles.h2}>
          Spread awareness and education on the usage of non-reusable plastic
          not just for the sake of protecting marine life but also for all of us
          and future generations yet to come. To improve and promote a
          plastic-free environment, we sell eco friendly products which are
          beneficial to both the consumer and the environment.
        </Text>
      </Card>

      <Text style={styles.contactTitle}>
        For more information, please contact:{" "}
      </Text>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: "Home"
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
    backgroundColor: "#FFF"
  },
  carousel: {
    paddingTop: 20,
    height: 200
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
  },
  card: {},
  h1: {
    fontWeight: "bold",
    fontSize: 16
  },
  h2: {
    fontSize: 14
  },
  contactTitle: {
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 30
  }
});
