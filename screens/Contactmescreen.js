import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Linking,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { FontAwesome } from '@expo/vector-icons'; // Expo vector icons

const ContactScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const scaleButton = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleButton, { toValue: 0.95, useNativeDriver: true }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleButton, { toValue: 1, useNativeDriver: true }).start();
  };

  const handleSend = () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "Please fill Name, Email and Message fields.");
      return;
    }

    const mailUrl = `mailto:panwarshiv853@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`;

    Linking.canOpenURL(mailUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(mailUrl);
        } else {
          Alert.alert("Error", "Unable to open mail client.");
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const handleSocialLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "#F5F7FF" }}
      contentContainerStyle={{ flexGrow: 1, }}
      enableOnAndroid={true}
      extraScrollHeight={80}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
          <Text style={styles.heading}>Get in Touch</Text>

          {/* Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name *</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Your Name"
              placeholderTextColor="#999"
            />
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email *</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
          </View>

          {/* Phone */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="+91 1234567890"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>


          <View style={styles.inputContainer}>
            <Text style={styles.label}>Message *</Text>
            <TextInput
              style={[styles.input, { height: 120 }]}
              value={message}
              onChangeText={setMessage}
              placeholder="Write your message..."
              placeholderTextColor="#999"
              multiline
            
            />
          </View>

          <Animated.View style={{ transform: [{ scale: scaleButton }] }}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSend}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>
          </Animated.View>


          <View style={styles.socialContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialLink("https://github.com/Thakur-1234?tab=repositories")}
            >
              <FontAwesome name="github" size={28} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: "#0A66C2" }]}
              onPress={() => handleSocialLink("https://www.linkedin.com/in/shivkumar85?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app://linkedin.com/in/yourprofile")}
            >
              <FontAwesome name="linkedin" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FF",
    padding: 20,

  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },

  label: {
    color: "#2563EB",
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    fontSize: 15,
    color: "#111",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialButton: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
