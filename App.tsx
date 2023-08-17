import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import configuracao from "./src/home/configuracao";
import Home from "./src/home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Animes" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Config" component={configuracao} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Animes Family" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Config" component={configuracao} options={{ headerShown: false }} />
      </Stack.Navigator>
      {/* <ScrollView style={{ backgroundColor: "#2F4F4F" }}>
          <Text
            style={style.textTop}
          >Anime Family</Text>
          <Home></Home>
        </ScrollView>
        <View>
        </View> */}
    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  textTop: {
    fontSize: 28,
    marginHorizontal: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: "#000"
  }
})