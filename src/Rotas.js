import {  StyleSheet, View, Text,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';

import ItensAprovados from './ItensAprovados';
import MediaNota from './MediaNota';

import Agenda from './Agenda';
import HomeScreen from './Homeprincipal';
import Perfil from './Perfil';


import Login from './Login';
import Home from './RedeWifi';

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const{logado} = useContext( UserContext );   
   
    if( logado == false ) {
        return( <Login /> )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen style={css.agenda} name="Home" component={HomeScreen} />
                <Tab.Screen style={css.agenda} name="Agenda" component={Agenda} />
                <Tab.Screen style={css.calculadora} name="Calculadora" component={MediaNota} /> 
                <Tab.Screen style={css.aprovados} name="Aprovados" component={ItensAprovados} />
                <Tab.Screen style={css.agenda} name="Perfil" component={Perfil} />   
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const css = StyleSheet.create({
    aprovados: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    calculadora: {
      fontSize: 20,
      color: '#333',
    },
    redewifi: {

    },
    bateria: {

    },
    agenda: {

    }
  });