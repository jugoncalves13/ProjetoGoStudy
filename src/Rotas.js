import {  StyleSheet, View, Text,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';

import ItensAprovados from './ItensAprovados';
import MediaNota from './MediaNota';
import RedeWifi from './RedeWifi';
import Bateria from './Bateria';
import Agenda from './Agenda';


import Login from './Login';

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const{logado} = useContext( UserContext );   
   
    if( logado == false ) {
        return( <Login /> )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen style={css.aprovados} name="Aprovados" component={ItensAprovados} />
                <Tab.Screen style={css.calculadora} name="Calculadora" component={MediaNota} />
                <Tab.Screen style={css.redewifi} name="RedeWifi" component={RedeWifi} />
                <Tab.Screen style={css.bateria} name="Bateria" component={Bateria} />
                <Tab.Screen style={css.agenda} name="Agenda" component={Agenda} />
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