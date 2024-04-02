import { FlatList, Keyboard, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View  } from 'react-native';
import { useEffect, useState } from "react";
import ListaAgenda from './ListaAgenda';
import uuid from "react-native-uuid";
import * as Calendar from 'expo-calendar';

export default function Agenda() 
{

    const[ agenda, setAgenda ] = useState();
    const[ inicio, setInicio ] = useState();
    const[ final, setFinal ] = useState();
    const[ dados, setDados ] = useState([]);
    const[ tema, setTema ] = useState();

    async function getPermissions()
    {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        }
    }

    useEffect( () => {
        getPermissions();
    }, []);

    async function Salvar()
    {
        if(agenda !="" && inicio != "" && final != "" && tema != ""){
        Keyboard.dismiss();
        const evento = {
            id: uuid.v4(),
            nome: agenda,
            inicio: inicio,
            final: final,
            tema: tema
        };
        const novoEvento = [ ...dados , evento ];
        setDados( novoEvento );
        setAgenda( "" );
        setInicio( "" );
        setFinal( "" ); 
        setTema( "" ); 

        const defaultCalendarSource = 
        Platform.OS === 'ios'
        ? await Calendar.getDefaultCalendarSource()
        : {isLocalAccount: true, name: 'Expo Calendar'};

        const newCalendarId = await Calendar.createCalendarAsync({
            title: 'Expo Calendar',
            color: 'blue',
            entityType: Calendar.EntityTypes.EVENT,
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: 'internalCalendarName',
            ownerAccount: 'Personal',
            accessLevel: Calendar.CalendarAccessLevel.OWNER,

        });

        let inicioDataHora = inicio.split(" ");
        let inicioData = inicioDataHora[0].split("-");
        let inicioHora = inicioDataHora[1].split(".");

        let finalDataHora = final.split(" ");
        let finalData = finalDataHora[0].split("-");
        let finalHora = finalDataHora[1].split(".");

        const newEvent = {
            title: agenda,
            startDate: new Date(inicioData[2], inicioData[1] -1 , inicioData[0], inicioHora[0], inicioHora[1] ),
            endDate: new Date(finalData[2], finalData[1] -1 , finalData[0], finalHora[0], finalHora[1]),
            notes: 'Chocolate',
        };

        try{
            await Calendar.createEventAsync(newCalendarId, newEvent);
            alert('Evento criado com sucesso!');
        } catch (error) {
            alert('Erro ao criar evento!');
        }

    }
}
    return(
        <View style={css.container}>
            <View>
            <Text style={css.titulo}>Cronograma De Estudos</Text>
                <TextInput placeholder="Matéria" style={css.input} 
                textInput={agenda}
                value={agenda} 
                onChangeText={ (digitado ) => setAgenda (digitado)}/>

                <TextInput placeholder="Data de Inicio" style={css.input}
                textInput={inicio}
                value={inicio} 
                onChangeText={ (digitado ) => setInicio (digitado)}
                keyboardType="numeric"
                />
                <TextInput placeholder="Data de término" style={css.input}
                textInput={final}
                value={final} 
                onChangeText={ (digitado ) => setFinal (digitado)} 
                keyboardType="numeric"
                />
                <TextInput placeholder="Tema" style={css.input} 
                textInput={tema}
                value={tema} 
                onChangeText={ (digitado ) => setTema (digitado)}/>

                <TouchableOpacity style={css.btn} onPress={Salvar}>
                    <Text style={css.btntext}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={dados}
                renderItem={ ({item}) => <ListaAgenda nome={item.nome}></ListaAgenda>}
                keyExtractor={ item => item.id }
            />
        </View>
    );
}
const css = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15
      },
    container: {
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItens: "center",
        alignSelf: "center"
    },
    input:{
        width: "100%",
        height: 55,
        borderWidth:1,
        borderRadius: 10,
        padding: 15, 
        marginTop: 5,
        marginBottom: 15,
        display: "flex",
        fontWeight: "bold",
    },
    btn:{
        backgroundColor: "#87CEFA",
        width: "100%",
        height: 55,
        borderRadius: 5,
        alignContent: "center ",
        justifyContent: "center",
        alignItems: "center"
    },
    btntext:{
        fontWeight: "bold"
    }
})