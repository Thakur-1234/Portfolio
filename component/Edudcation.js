import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function EducationSection() {
  return (
    <LinearGradient
      colors={["#9333EA", "#3B82F6", "#6EE7B7"]} 
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.heading}>Education</Text>

        <Text style={styles.text}>
          My academic journey has provided me with a strong foundation in 
          <Text style={styles.bold}> computer science, software development, and problem-solving</Text>.  
          From school education to my bachelor’s degree, I have consistently focused 
          on learning the fundamentals of programming, logical reasoning, and 
          real-world applications of technology.
        </Text>

        
        <View style={styles.list}>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Bachelor of Computer Applications (BCA)</Text>
          </Text>
          <Text style={styles.text}>
            ICFAI University, Dehradun {"\n"}
            Expected Graduation: May 2026 {"\n"}
            Current CGPA: <Text style={styles.bold}>9.8</Text>
          </Text>
          <Text style={styles.text}>
            Here, I have developed expertise in <Text style={styles.bold}>Python, React Native, SQL, and Data Structures</Text>, 
            while also working on projects that focus on innovation and problem-solving.
          </Text>
        </View>

        
        <View style={styles.list}>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Higher Secondary (Class XII)</Text>
          </Text>
          <Text style={styles.text}>
            UK Board, 2019 {"\n"}
            Percentage: <Text style={styles.bold}>74.6%</Text>
          </Text>
          <Text style={styles.text}>
            During this stage, I strengthened my logical reasoning and 
            analytical skills, which helped me build a base for programming 
            and problem-solving in higher studies.
          </Text>
        </View>

        
        <View style={styles.list}>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Secondary (Class X)</Text>
          </Text>
          <Text style={styles.text}>
            UK Board, 2017 {"\n"}
            Percentage: <Text style={styles.bold}>61.2%</Text>
          </Text>
          <Text style={styles.text}>
            This stage laid the foundation of my academic discipline, 
            consistency, and interest in computer science, motivating me 
            to pursue technology as a career.
          </Text>
        </View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#ffffffff",   // Black heading
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
    color: "#ffffffff",   // Dark gray text
    textAlign: "left",
  },
  bold: {
    fontWeight: "bold",
    color: "#ffffffff",   // Bold black
  },
  list: {
    marginBottom: 20,
  },
  bullet: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#000000ff",   // Black bullet
  },
  subText: {
    color: "#7d7b7b2a",
    fontWeight: "600",
  },
});
