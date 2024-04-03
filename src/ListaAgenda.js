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
        color:  "red",
        height: 55,
        borderWidth:1,
        borderRadius: 10,
        padding: 15, 
        marginTop: 5,
        marginBottom: 15,
        display: "flex",
        marginTop: 35,
    }
})