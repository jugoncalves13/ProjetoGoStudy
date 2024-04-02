import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';

import ItensAprovados from './ItensAprovados';
import MediaNota from './MediaNota';

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
                <Tab.Screen name="Aprovados" component={ItensAprovados} />
                <Tab.Screen name="Calculadora" component={MediaNota} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}