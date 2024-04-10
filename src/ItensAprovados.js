import { Button, Text, FlatList, View, StyleSheet, Image } from "react-native";
import Aprovados from "./Aprovados";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";


const dados = [
    {
        img:  require("../assets/imagem.png"),
        id: "01",
        nome: "Ana Paula",
        curso: "Psicologia-UNESP",
        info: "Estudei usando a plataforma GoStudy durante dois anos.",
    },
    {
        img:  require("../assets/imagem2.png"),
        id: "02",
        nome: "Ana Clara",
        curso: "Medicina-USP",
        info: "Usei a plataforma GoStudy durante um ano.",
    },
    {
        img:  require("../assets/imagem3.png"),
        id: "03",
        nome: "Pedro Lucas",
        curso: "Biomedicina-UNESP",
        info: "Com o cronograma do GoStudy, consegui organizar meus estudos.",
    },
    {
        img:  require("../assets/imagem4.png"),
        id: "04",
        nome: "Ana Carolini",
        curso: "Psicologia-UNESP",
        info: "Consegui me organizar muito melhor com a plataforma.",
    },
    
]



export default function ItensAprovados({navigation})
{
    const {usuario} = useContext( UserContext );

    return(
        <View style={css.container}>
            <Text style={css.input}>Olha só quem já passou com a gente! {usuario}</Text>
            <FlatList
                data={dados}
                renderItem={({item}) => <Aprovados nome={item.nome}
                 curso={item.curso} 
                 info={item.info}
                 img={item.img} 
            />
                }
                keyExtractor={item => item.id}
                contentContainerStyle={css.container}
                horizontal={false}
                numColumns={2}
            />
        </View>
    );
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
       justifyContent: "center"
    },
    input: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color:"black", 
        marginBottom:20
    }
})