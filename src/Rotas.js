import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';

import ItensAprovados from './ItensAprovados';
import MediaNota from './MediaNota';

import Login from './Login';
import Agenda from './Agenda';
import Home from './Home';
import HomeScreen from './Homeprincipal';

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
                <Tab.Screen name="Agenda" component={Agenda} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="HomeScreen" component={HomeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}