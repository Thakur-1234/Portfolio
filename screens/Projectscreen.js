import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import { projectsData } from "../assets/projectdata";

const { height } = Dimensions.get("window");

const ProjectCard = ({ item, scrollY }) => {
  const [cardLayout, setCardLayout] = useState({ y: 0, height: 0 });

  const onLayout = (e) => {
    const { y, height } = e.nativeEvent.layout;
    setCardLayout({ y, height });
  };

  const translateY = scrollY.interpolate({
    inputRange: [cardLayout.y - height, cardLayout.y, cardLayout.y + height],
    outputRange: [50, 0, -50],
    extrapolate: "clamp",
  });

  const scale = scrollY.interpolate({
    inputRange: [cardLayout.y - height, cardLayout.y, cardLayout.y + height],
    outputRange: [0.95, 1, 0.95],
    extrapolate: "clamp",
  });

  return (
    <Animated.View onLayout={onLayout} style={[styles.card, { transform: [{ scale }, { translateY }] }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.techList}>
        {item.techStack.map((tech, idx) => (
          <View key={idx} style={styles.techBadge}>
            <Text style={styles.techText}>{tech}</Text>
          </View>
        ))}
      </View>

      <View style={styles.linkContainer}>
        {item.github ? (
          <TouchableOpacity onPress={() => Linking.openURL(item.github)} style={styles.button}>
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>
        ) : null}

        {item.live ? (
          <TouchableOpacity onPress={() => Linking.openURL(item.live)} style={styles.button}>
            <Text style={styles.buttonText}>Live</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </Animated.View>
  );
};

const ProjectScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Projects</Text>
      <Animated.FlatList
        data={projectsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProjectCard item={item} scrollY={scrollY} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: height / 3 }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
        })}
      />
    </View>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7FF", padding: 16 },
  heading: { fontSize: 28, fontWeight: "bold", marginBottom: 20, color: "#1E3A8A" },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 6,
  },
  title: { fontSize: 20, fontWeight: "700", color: "#111", marginBottom: 8 },
  description: { fontSize: 15, color: "#333", lineHeight: 20, marginBottom: 12 },
  techList: { flexDirection: "row", flexWrap: "wrap", marginBottom: 12 },
  techBadge: {
    backgroundColor: "#E0E7FF",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 6,
  },
  techText: { color: "#2563EB", fontSize: 12, fontWeight: "600" },
  linkContainer: { flexDirection: "row", justifyContent: "space-between" },
  button: { backgroundColor: "#2563EB", paddingVertical: 8, paddingHorizontal: 20, borderRadius: 12 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 15, textAlign: "center" },
});
