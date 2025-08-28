import { StyleSheet, Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Profilecard = () => {
  return (
    <LinearGradient
      colors={["#3B82F6", "#9333EA"]} 
      style={styles.gradient}
    >
      <View style={styles.profileContainer}>
        <Image
        source={require('../assets/IMG-20241114-WA0026.png')}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.IntroText}>SHIV KUMAR</Text>
          <Text style={styles.Domain}>Mobile Applications Developer</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Profilecard

const styles = StyleSheet.create({
  gradient: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: '100%',
  },
  profileImage: {
    width: 150,  
    height: 150,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#c324b3ff",
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  IntroText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom:1,
  },
  Domain: {
    fontSize: 16,
    color: "#E0F2FE",
  },
})