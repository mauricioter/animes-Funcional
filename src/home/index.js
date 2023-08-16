import React from "react";
import { Button, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Home() {
    return (
        <View style={{ backgroundColor: "#848482", borderRadius: 16, marginHorizontal: 20, margin: 15, paddingHorizontal: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
            <TextInput
                onChangeText={0}
                placeholder="Pesquisa..."

            >
            </TextInput>
            <TouchableOpacity style={{ alignItems: "flex-end" }}>
                <Icon name="search" solid
                >
                </Icon>

            </TouchableOpacity>
        </View >
    )
}