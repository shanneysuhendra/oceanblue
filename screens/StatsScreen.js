import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  Segment,
  Button,
  Text,
  Content,
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon
} from "native-base";
import { Card, List, ListItem } from "react-native-elements";
import TabIndoStats from "./TabIndoStats";
import TabWorldStats from "./TabWorldStats";
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

export default function StatsScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Container>
          <Tabs>
            <Tab
              heading={
                <TabHeading>
                  <Text>INDONESIA</Text>
                </TabHeading>
              }
            >
              <TabIndoStats />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Text>WORLD</Text>
                </TabHeading>
              }
            >
              <TabWorldStats />
            </Tab>
          </Tabs>
        </Container>
        <Card style={styles.heyy}>
          <Button
            style={styles.hey}
            onPress={() => {
              buttonPressed(props);
            }}
          >
            <Text style={styles.center}>
              Learn facts related to plastic &nbsp;>>
            </Text>
          </Button>
        </Card>
      </View>
    </ScrollView>
  );
}
function buttonPressed(props) {
  props.navigation.navigate("Statss");
}
StatsScreen.navigationOptions = {
  title: "STATISTICS",
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
  },
  center: {
    paddingLeft: 45
  },
  hey: {
    borderColor: "#588bae",
    backgroundColor: "#588bae"
  },
  heyy: {
    backgroundColor: "transparent"
  }
});
