import {  StyleSheet, View, Text, Image  } from 'react-native';
import React,{useState, useEffect, } from 'react';
import {useBatteryLevel} from "expo-battery";

export default function Bateria()
{
    const [bateria, setBateria] = useState();

    const batteryLevel = useBatteryLevel();

    useEffect( () => {
        setBateria( (batteryLevel * 100).toFixed(0) );
    }, [batteryLevel]);


    return(
        <>
        <View style={[styles.container]}>
        {bateria > 20 ? <Text style={styles.texto}>Alguns recursos não estão carregando pois o seu aparelho está com pouca bateria, 
    conecte-o à uma fonte e tente novamente</Text> : <Text>TEste</Text>
        }
        <Text>{bateria}</Text>
        <Image style={styles.img} source={require("../assets/iconebateria.png")}/>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize:14,
        width: "100%",
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    img: {
        maxWidth: "100%",
        width: 70,
        height: 60,
        display: "flex",
        fontWeight: "bold"
    }
});