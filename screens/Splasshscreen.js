import React from "react";
import { StyleSheet, Text, View, Dimensions,  } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import { useEffect } from "react";

const { width, height } = Dimensions.get("window");

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Main");   // Auto open "Main" (Tabs) after 3 sec
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
    
      <Svg height="150" width="150" style={styles.topRight}>
        <Circle cx="150" cy="0" r="150" fill="#8d10d0b0" />
      </Svg>
      <Svg height="150" width="150" style={styles.bottomLeft}>
        <Circle cx="0" cy="150" r="150" fill="#b026ff92" />
      </Svg>

    
      <View style={styles.logoContainer}>
        <Svg height="160" width="160">
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor="#0b71ffb8" stopOpacity="1" />
              <Stop offset="100%" stopColor="#6f11ccd5" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Circle cx="80" cy="80" r="75" fill="url(#grad)" />
        </Svg>
        <Text style={styles.logoText}>Shiv</Text>
      </View>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  topRight: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  bottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  logoContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    position: "absolute",
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 4,
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});
