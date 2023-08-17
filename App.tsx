import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';

import configuracao from "./src/home/configuracao";
import Home from "./src/home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Animes') {
          iconName = focused
            ? 'home-outline'
            : 'home-outline';
        } else if (route.name === 'Config') {
          iconName = focused ? 'settings-outline' : 'settings-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })} >
      <Tab.Screen name="Animes" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Config" component={configuracao} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Animes Family" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Config" component={configuracao} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// const style = StyleSheet.create({
//   textTop: {
//     fontSize: 28,
//     marginHorizontal: 20,
//     marginTop: 10,
//     fontWeight: "bold",
//     color: "#000"
// //   }
// })
{/* <ScrollView style={{ backgroundColor: "#2F4F4F" }}>
    <Text
      style={style.textTop}
    >Anime Family</Text>
    <Home></Home>
  </ScrollView>
  <View>
  </View> */}