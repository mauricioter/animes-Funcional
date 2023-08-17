import React, { useState } from "react";
import { Button, TextInput, TouchableOpacity, View, FlatList, Image, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animes from "../../animes";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
    // fazer uma funcao que vai fazer a busca dp texto do input 
    // primeira const que vai ficar responsavel pelo o texto do Input 
    const [busca, setBusca] = useState('')
    //  segundo const: vai ficar responsavel pela  busca do Anime 
    const [filterAnime, setFilterAnime] = useState(Animes)

    // const responsavel por filtrar o nome do anime e trazer somente aquele que eu pedi
    const animesFiltter = (text) => {
        setBusca(text);
        const filtrar = Animes.filter(item => item.title.romaji.toLowerCase().includes(text.toLowerCase())
        );
        //  SetFilterAnime virou filtrar 
        setFilterAnime(filtrar)
    }
    return (
        <ScrollView style={{ backgroundColor: "#084D6E" }}>
            <Text style={{ fontSize: 26, fontWeight: "bold", paddingHorizontal: 20, paddingTop: 15, color: "#000" }}>Anime Family</Text>
            <View style={{ backgroundColor: "#848482", borderRadius: 16, marginHorizontal: 20, marginTop: 15, paddingHorizontal: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 15 }} >
                <TextInput
                    onChangeText={animesFiltter}
                    placeholder="Pesquisa..."
                    autoComplete="additional-name"
                    value={busca}
                >
                </TextInput>
                <TouchableOpacity
                    onPress={() => TextInput}
                    style={{ alignItems: "flex-end" }}>
                    <Icon name="search" solid
                    >
                    </Icon>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 5, backgroundColor: "white" }}>
                <FlatList numColumns={2}
                    data={filterAnime}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => console.warn('olaa')}
                            style={{ justifyContent: "center", alignItems: "center", maxWidth: 175, height: 250, marginHorizontal: 10 }} key={item.id}>
                            <Image
                                style={{ height: 200, width: 150, borderRadius: 8 }}
                                source={{
                                    uri: item.coverImage.large
                                }}
                            />
                            <Text>
                                {item.title.romaji}
                            </Text>
                        </TouchableOpacity>
                    }
                />
            </View >
        </ScrollView>
    )
}




// <View
// >
// <FlatList numColumns={2}
//     data={Animes}
//     keyExtractor={(item) => item.id}
//     renderItem={({ item }) =>
//         <TouchableOpacity
//             onPress={() => console.warn('olaa')}
//             style={{ justifyContent: "center", alignItems: "center", maxWidth: 175, height: 250, marginHorizontal: 10 }} key={item.id}>
//             <Image
//                 style={{ height: 200, width: 150, borderRadius: 8 }}
//                 source={{
//                     uri: item.coverImage.large
//                 }}
//             />
//             <Text>
//                 {item.title.romaji}
//             </Text>
//         </TouchableOpacity>
//     }
// />
// </View>