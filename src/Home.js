import {  StyleSheet, View, Switch, Text, StatusBar } from 'react-native';
import React,{useState, useEffect, useContext} from 'react';
import {useBatteryLevel} from "expo-battery";
import * as Network from "expo-network";
import {UserContext} from "./Context/UserContext";


export default function Home( {navigation} ) 
{
   
    const [ativado, setAtivado ] = useState( false );
    const [cor, setCor ] = useState( "white" );
    const [bateria, setBateria] = useState();
    const [rede, setRede] = useState();

    const [usuario] = useContext( UserContext );

    const batteryLevel = useBatteryLevel();

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

    useEffect( () => {
        setBateria( (batteryLevel * 100).toFixed(0) );
    }, [batteryLevel]);

    function CliqueSwicht()
    {
        setAtivado( !ativado );
        if( !ativado ) {
            setCor( 'black' );
        } else {
            setCor( 'white' );
        }
    }

    return(
        <>
        <View style={[styles.container,  {backgroundColor: cor}]}>
            {bateria > 20 ?
            
            <Switch 
            trackColor={{false: 'lightgrey', true: 'lightgrey'}}
            thumbColor={ativado ? 'white' : 'blue'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={CliqueSwicht}
            value={ativado}
            />
            
            : <Text style={styles.texto}>Alguns recursos não estão carregando pois o seu aparelho está com pouca bateria, 
                conecte-o à uma fonte e tente novamente.</Text>
            }
            { rede ? <Text></Text> : <Text>Conecte no WIFI</Text> }
            <Text>{bateria}</Text>
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
        backgroundColor: "pink",
        width: "100%",
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});