import { StyleSheet, View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import ItensAprovados from './ItensAprovados';
import MediaNota from './MediaNota';

import Agenda from './Agenda';
import HomeScreen from './Homeprincipal';
import Perfil from './Perfil';


import Login from './Login';
import Home from './RedeWifi';


const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(UserContext);

    if (logado == false) {
        return (<Login />)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#87CEFA"
                    },
                    tabBarStyle: {
                        backgroundColor: "#87CEFA"
                    },
                    tabBarActiveTintColor: "#87CEFA",
                    color: "black"
                }}
            >
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-box-outline" color="black" size={size} />
                        )
                    }} />
                <Tab.Screen
                    name="HomePrincipal"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="bank" color="black" size={size} />
                        )
                    }} />
                <Tab.Screen
                    name="Aprovados"
                    component={ItensAprovados}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-supervisor-circle" color="black" size={size} />
                        )
                    }} />
                <Tab.Screen
                    name="Agenda"
                    component={Agenda}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="book-open-variant" color="black" size={size} />
                        )
                    }} />
                <Tab.Screen
                    name="Calculadora"
                    component={MediaNota}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="calculator" color="black" size={size} />
                        )
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const css = StyleSheet.create({
    aprovados: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        fontSize: 20
    },
    calculadora: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    redewifi: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    bateria: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    agenda: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
});