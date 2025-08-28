import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Profilescreen from "../screens/Profilescreen";
import Projectscreen from "../screens/Projectscreen";
import Experiencescreen from "../screens/Experiencescreen";
import Contactmescreen from "../screens/Contactmescreen";

const Toptab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
     return (
          <SafeAreaView style={styles.container}>
               <Toptab.Navigator
                    screenOptions={({ route }) => ({
                         tabBarShowLabel: false, 
                         tabBarActiveTintColor: "#dd00ffff",
                         tabBarInactiveTintColor: "#390cffff",
                         tabBarShowIcon: true,
                         tabBarStyle: { backgroundColor: "white" },
                         tabBarIndicatorStyle: { backgroundColor: "blue", height: 3 },
                         tabBarContentContainerStyle:{
                              backgroundColor:'#d0dbd4ff'
                         },
                         tabBarIcon: ({ focused, color }) => {
                              let iconName;
                              if (route.name === "Profile") {
                                   iconName = focused ? "account-circle" : "account-circle-outline";
                                   return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
                              } else if (route.name === "Projects") {
                                   iconName = focused ? "code-braces" : "code-braces-box";
                                   return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
                              } else if (route.name === "Exp") {
                                   iconName = focused ? "briefcase" : "briefcase-outline";
                                   return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
                              } else if (route.name === "Contact") {
                                   iconName = focused ? "email" : "email-outline";
                                   return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
                              }
                         },
                    })}
               >
                    <Toptab.Screen name="Profile" component={Profilescreen} />
                    <Toptab.Screen name="Projects" component={Projectscreen} />
                    <Toptab.Screen name="Exp" component={Experiencescreen} />
                    <Toptab.Screen name="Contact" component={Contactmescreen} />
               </Toptab.Navigator>
          </SafeAreaView>
     );
};

export default TopTabNavigator;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "white",
     },
});
