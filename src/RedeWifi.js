import {  StyleSheet, View, Image, Text, StatusBar } from 'react-native';
import React,{useState, useEffect, useContext} from 'react';
import * as Network from "expo-network";



export default function Home( {navigation} ) 
{
   
    const [rede, setRede] = useState();



    async function getStatus()
    {
        const status = await Network.getNetworkStateAsync();
        if( status.type == "WIFI" ) {
            setRede( true );
        }
    }

    useEffect( ()=> {
        getStatus();
    } , [rede]);


    return(
        <>
        <View style={[styles.container]}>
            { rede ? <Text></Text> : <Text style={styles.texto}>Os recursos não estão carregando por falta de internet,
             conecte-se a rede e tente novamente.</Text> }
             <Image style={styles.img} source={require("../assets/iconecarregar.png")}/>
            <StatusBar/>
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
        fontSize:15,
        width: "100%",
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    img: {
        maxWidth: "100%",
        width: 60,
        height: 60,
        display: "flex",
        fontWeight: "bold"
    }
});