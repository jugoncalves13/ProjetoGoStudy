import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./src/Home";
import Agenda from "./src/Agenda";
import Login from "./src/Login";
import { useEffect, useState } from 'react';
import UserProvider from './src/Context/UserContext';

const Tab = createBottomTabNavigator();

export default function App() {

  const[ logado, setLogado ] = useState( false );

  async function verificaUsuario() {
    const usuario = await AsyncStorage.getItem( "usuario" );
    if( usuario != ""){
      setLogado(true);
    }
  };
   useEffect( () => {
      verificaUsuario();
   }, [] );
   if( logado == false ) {
    return( <Login setLogado={setLogado}/>)
   }

  return (
    <UserProvider>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} /> 
        <Tab.Screen name="Agenda" component={Agenda} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
    </UserProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
