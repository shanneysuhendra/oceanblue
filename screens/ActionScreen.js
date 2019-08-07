import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { Segment, Button, Text, Content, Accordion } from "native-base";
import { Card, Icon, List, ListItem } from "react-native-elements";
// import TabIndoAction from "./TabIndoAction";
// import TabWorldAction from "./TabWorldAction";
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

var { height, width } = Dimensions.get("window");
const fractionWidth = width * 0.75;

var selectedTab = 1;

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default function ActionScreen(props) {
  [selectedTab, setSelectedTab] = useState(1);
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 250 }}>
        <Accordion dataArray={dataArray} expanded={0} />
        {/* <Segment>
          <Button
            first
            active={selectedTab === 1}
            onPress={() => {
              setSelectedTab(1);
            }}
          >
            <Text>Indonesia</Text>
          </Button>
          <Button
            last
            active={selectedTab === 2}
            onPress={() => {
              setSelectedTab(2);
            }}
          >
            <Text>World</Text>
          </Button>
        </Segment>
        <Content padder>
          {selectedTab == 1 && <TabIndoAction />}
          {selectedTab == 2 && <TabWorldAction />}
        </Content>
        <Card>
          <Button
            onPress={() => {
              buttonPressed(props);
            }}
          >
            <Text>"Take your own action!"</Text>
          </Button>
        </Card> */}
      </View>
    </ScrollView>
  );
}
function buttonPressed(props) {
  props.navigation.navigate("Actionss");
}
ActionScreen.navigationOptions = {
  title: "Actions"
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
