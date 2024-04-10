import {   StyleSheet, Text, View  } from "react-native";

export default function ListaAgenda({agenda, tema}){

    return(
        <View  style={css.editaitem}>
        <Text>{tema}</Text>
        <Text>{agenda}</Text>
    </View>
    )
}

const css = StyleSheet.create({
    editaitem:{
        color: "white",
        fontSize: 25,
        height: 55,
        borderWidth:1,
        borderRadius: 10,
        padding: 15, 
        marginTop: 5,
        marginBottom: 25,
        display: "flex",
        marginTop: 5,
        alignItems: "center"
    }
})