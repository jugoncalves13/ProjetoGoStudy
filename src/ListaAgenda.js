import {   StyleSheet, Text, View  } from "react-native";

export default function ListaAgenda({nome}){

    return(
        <View >
        <Text style={css.editaitem}>{nome}</Text>
    </View>
    )
}

const css = StyleSheet.create({
    editaitem:{
        backgroundColor:"blue",
        width: "100%",
        height: 55,
        color: "white",
        marginTop:20,
        borderRadius: 5,
        textAlign: "center",
        fontSize: 15,
        display: "flex"

    }
})