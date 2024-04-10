import {View, Text, StyleSheet, Image} from "react-native";

export default function Aprovados ({nome, curso, info, img}) {
    return(
    <View style={css.caixa}>
        <Image style={css.img}source={img}/>
        <Text style={css.nome}>{nome}</Text>
        <Text style={css.curso}>{curso}</Text>
        <Text style={css.info}>{info}</Text>
    </View>
    )
}

const css = StyleSheet.create({
    caixa: {
        width: "40%",
        height: 180,
        backgroundColor: "lightgray",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:19
    },
    nome: {
        color: "#4169E1",
        fontWeight: "bold",
        
        
    },
    curso: {
        fontWeight: "bold",
        fontStyle: "italic"
        
    },
    info:{
        
        margin: 10,
        textAlign: "center"
    },
    img:{
        width: 50,
        height: 50,
    }
})