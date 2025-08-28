
import { Text, View, StyleSheet, Image, FlatList, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { certificatesData } from "../assets/certificatesdata";

const { width } = Dimensions.get("window");

export default function CertificatesSection() {
  const renderItem = ({ item }) => (
    <>
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.icon} />
    </View>
      <Text style={styles.bullet}>{item.title}</Text>

    </>
    
  );

  return (
    <LinearGradient
           colors={["#6EE7B7", "#3B82F6","#9333EA" ]} 

      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Certificates & Achievements</Text>

        <Text style={styles.text}>
          I have earned several <Text style={styles.bold}>certifications</Text> 
          and participated in <Text style={styles.bold}>hackathons</Text>, 
          which helped me grow my technical skills and real-world problem-solving abilities.
        </Text>

        <FlatList
          data={certificatesData}  
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000000ff",
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
    color: "#000000ff",
    textAlign: "left",
  },
  bold: {
    fontWeight: "bold",
    color: "#000000ff",
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#ffffffff",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  icon: {
    width:330,
    height: 230,
    borderRadius: 8,
  },
  bullet: {
    fontSize: 15,
    lineHeight: 20,
    flex: 1,
    color: "#000000ff",
    borderColor:'black',
    marginBottom:10,
    marginTop:5,
    textAlign:'center'

  },
});
