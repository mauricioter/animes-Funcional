import React from "react";
import { Image, Text, View } from "react-native";

import Animes from "../../../animes";


export default function homeAnimes(props) {
    return (
        <View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 20 }}>
                {Animes.map(function (anime) {
                    return (
                        <View style={{ justifyContent: "center", alignItems: "center", maxWidth: 175, height: 300 }} key={anime.id}>
                            <Image
                                style={{ height: 200, width: 150, borderRadius: 8 }}
                                source={{
                                    uri: anime.coverImage.large
                                }}
                            />
                            <Text>
                                {anime.title.romaji}
                            </Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}