import { View, Text, TouchableOpacity, StyleSheet, Alert, Linking, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { LinearGradient } from "expo-linear-gradient";
import { Asset } from "expo-asset"; 

const CVComponent = () => {
 const handleViewCV = async () => {
    try {
      const asset = Asset.fromModule(require("../assets/shiv.pdf"));
      await asset.downloadAsync();

      const fileUri = FileSystem.documentDirectory + "shiv.pdf";

    
      await FileSystem.copyAsync({
        from: asset.localUri,
        to: fileUri,
      });
        if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert("Error", "Sharing is not available on this device.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Unable to open CV.");
    }
  };

  const handleDownloadCV = async () => {
    try {
      const asset = Asset.fromModule(require("../assets/shiv.pdf"));
      await asset.downloadAsync();

      const fileUri = FileSystem.documentDirectory + "shiv.pdf";

      
      await FileSystem.copyAsync({
        from: asset.localUri,
        to: fileUri,
      });

      if (Platform.OS === "ios" || Platform.OS === "android") {
        await Sharing.shareAsync(fileUri);
      }

      Alert.alert("Success", "CV saved and ready to view!");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Unable to download CV.");
    }
  };

  return (
    <LinearGradient
      colors={["#9333EA", "#3B82F6", "#6EE7B7"]}
      style={styles.container}
    >
      <Text style={styles.heading}>My CV</Text>

      <View style={styles.buttonContainer}>
        {/* View CV */}
        <TouchableOpacity onPress={handleViewCV} style={styles.buttonWrapper}>
          <LinearGradient
            colors={["#2563EB", "#60A5FA"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <FontAwesome name="eye" size={18} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>View CV</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Download CV */}
        <TouchableOpacity onPress={handleDownloadCV} style={styles.buttonWrapper}>
          <LinearGradient
            colors={["#0f2027", "#203a43", "#2c5364"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <FontAwesome name="download" size={18} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>Download CV</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CVComponent;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 6,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 12,
    overflow: "hidden",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
