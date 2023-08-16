import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";

import HomeAnime from "./src/home/homeAnime";
import Home from "./src/home";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <ScrollView>
      <View>
        <View>
          <Text
            style={style.textTop}
          >Anime Family</Text>
          <Home></Home>
        </View>
        <View>
          <HomeAnime></HomeAnime>
        </View>
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  textTop: {
    fontSize: 25,
    margin: 20,
    fontWeight: "bold",
  }
})