import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutScreen() {
    return (
        <LinearGradient
            colors={["#6EE7B7", "#3B82F6", "#9333EA"]} // gradient colors
            style={styles.gradient}
        >
            <ScrollView style={styles.container}>

                
                <Text style={styles.heading}>About Me</Text>

                {/* Intro */}
                <Text style={styles.text}>
                    Hello, I am <Text style={styles.bold}>Shiv Kumar</Text>, an enthusiastic
                    learner and aspiring software developer, currently pursuing my{" "}
                    <Text style={styles.bold}>Bachelor of Computer Applications (BCA)</Text>{" "}
                    at <Text style={styles.bold}>ICFAI University, Dehradun</Text>. I hold a
                    strong academic record with a current{" "}
                    <Text style={styles.bold}>CGPA of 9.8</Text>.
                </Text>

                <Text style={styles.text}>
                    I am passionate about building <Text style={styles.bold}>
                        user-friendly, efficient, and impactful</Text> applications. My learning
                    journey is fueled by curiosity and hands-on practice, which allows me to
                    translate theoretical concepts into practical solutions.
                </Text>

                {/* Skills */}
                <Text style={styles.subheading}>Core Skills</Text>
                <View style={styles.list}>
                    <Text style={styles.bullet}>• Python, JavaScript, SQL</Text>
                    <Text style={styles.bullet}>• React Native (Android & iOS), Redux, Axios</Text>
                    <Text style={styles.bullet}>• Databases: MySQL, Firebase</Text>
                    <Text style={styles.bullet}>• Tools: Git, GitHub, VS Code, Android Studio</Text>
                </View>

                {/* Projects */}
                <Text style={styles.subheading}>Key Projects</Text>
                <View style={styles.list}>
                    <Text style={styles.bullet}>
                        • <Text style={styles.bold}>AI Chat Application</Text> – A cross-platform
                        mobile app using React Native and OpenAI API for real-time AI-driven
                        conversations.
                    </Text>
                    <Text style={styles.bullet}>
                        • <Text style={styles.bold}>Mental Health Support Chatbot</Text> – An AI-powered
                        chatbot built in React Native, designed to provide stress, anxiety, and
                        mood support through empathetic conversations.
                    </Text>
                </View>

                {/* Professional Experience */}
                <Text style={styles.subheading}>Professional Experience</Text>
                <View style={styles.list}>
                    <Text style={styles.bullet}>
                        • <Text style={styles.bold}>AV Enterprises</Text> – Worked as Quality
                        Control Officer ensuring high standards, inspections, and defect
                        resolution in a manufacturing environment.
                    </Text>
                    <Text style={styles.bullet}>
                        • <Text style={styles.bold}>INTAS Pharmaceuticals</Text> – Assisted in
                        laboratory operations, equipment management, and micro-QC testing,
                        gaining real-world problem-solving exposure.
                    </Text>
                </View>

                {/* Interests */}
                <Text style={styles.subheading}>Areas of Interest</Text>
                <View style={styles.list}>
                    <Text style={styles.bullet}>• Mobile App Development</Text>
                    <Text style={styles.bullet}>• Databases Design</Text>
                    <Text style={styles.bullet}>• Full-Stack Application Development</Text>
                </View>

                {/* Closing */}
                <Text style={styles.text}>
                    Beyond academics and coding, I enjoy exploring{" "}
                    <Text style={styles.bold}>new technologies</Text>, participating in{" "}
                    <Text style={styles.bold}>hackathons</Text>, and brainstorming
                    innovative ideas. My long-term goal is to continuously grow as a
                    developer and contribute to solutions that bring meaningful change
                    to society.
                </Text>

            </ScrollView>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        padding: 16,
    },
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#222",
    },
    subheading: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 10,
        color: "#333",
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 12,
        color: "#444",
    },
    bold: {
        fontWeight: "bold",
        color: "#000",
    },
    list: {
        marginLeft: 10,
        marginBottom: 12,
    },
    bullet: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 8,
        color: "#444",
    },
    gradient: {
        flex: 1
    }
});
