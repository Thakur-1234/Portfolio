import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Linking, Animated, StyleSheet } from "react-native";
import { experienceData } from "../assets/experiences";
import { ScrollView } from "react-native-gesture-handler";

const ExperienceCard = ({ item, index, scrollY }) => {
  const translateY = scrollY.interpolate({
    inputRange: [-1, 0, 150 * index, 150 * (index + 1)],
    outputRange: [0, 0, 0, -10],
    extrapolate: "clamp",
  });

  const shadowOpacity = scrollY.interpolate({
    inputRange: [-1, 0, 150 * index, 150 * (index + 1)],
    outputRange: [0.1, 0.1, 0.1, 0.25],
    extrapolate: "clamp",
  });

  return (
    <Animated.View style={[styles.card, { transform: [{ translateY }], shadowOpacity }]}>
      <Text style={styles.role}>{item.role}</Text>
      <Text style={styles.company}>{item.company}</Text>
      <Text style={styles.duration}>{item.duration}</Text>

      <View style={styles.skillsContainer}>
        {item.skills.map((skill, idx) => (
          <View key={idx} style={styles.skillChip}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>

      {item.description.map((desc, idx) => (
        <Text key={idx} style={styles.description}>• {desc}</Text>
      ))}

      {item.link && (
        <TouchableOpacity onPress={() => Linking.openURL(item.link)} style={styles.button}>
          <Text style={styles.buttonText}>View Company</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const ExperienceScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    
    <View style={styles.container}>
      <Text style={styles.heading}>Experience</Text>
      <Animated.FlatList
        data={experienceData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <ExperienceCard item={item} index={index} scrollY={scrollY} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

export default ExperienceScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7FF", padding: 16 },
  heading: { fontSize: 28, fontWeight: "bold", marginBottom: 20, color: "#1E3A8A" },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 6,
  },
  role: { fontSize: 20, fontWeight: "700", color: "#111", marginBottom: 4 },
  company: { fontSize: 16, fontWeight: "600", color: "#2563EB", marginBottom: 4 },
  duration: { fontSize: 14, color: "#444", marginBottom: 8 },
  description: { fontSize: 15, color: "#333", lineHeight: 20, marginBottom: 6 },
  button: { backgroundColor: "#2563EB", paddingVertical: 8, paddingHorizontal: 20, borderRadius: 12, alignSelf: "flex-start", marginTop: 10 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
  skillsContainer: { flexDirection: "row", flexWrap: "wrap", marginBottom: 10 },
  skillChip: { backgroundColor: "#DCEEFB", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20, marginRight: 8, marginBottom: 8 },
  skillText: { fontSize: 13, fontWeight: "600", color: "#2563EB" },
});
