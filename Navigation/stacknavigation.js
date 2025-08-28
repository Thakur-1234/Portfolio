
import { createStackNavigator } from "@react-navigation/stack";
import Splashscreen from "../screens/Splasshscreen";
import TopTabNavigator from "./Toptab";

const Stack = createStackNavigator();

export default function Navigation() {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Splash" component={Splashscreen} />
      <Stack.Screen name="Main" component={TopTabNavigator} />
    </Stack.Navigator>

  );
}
