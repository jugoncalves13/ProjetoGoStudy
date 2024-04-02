import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext(0);

export default function UserProvider({children}) {

    const[ logado , setLogado ] = useState(false);
    const[ usuario, setUsuario ] = useState( false );

    async function Login( email, senha ) {

        if( email == "email@mail.com" && senha == "1234" ) {
            await AsyncStorage.setItem( "usuario", "Ana" );
            setLogado( true );
            setUsuario( usuario );
        }
    }

    async function infoUsuarios()
    {
        const user = await AsyncStorage.getItem( "usuario" );
        console.log( user );
        if( user ) {
            setLogado( true );
            setUsuario( user );
        }
    }
    useEffect( () => {
        infoUsuarios();
    } , [] );

    return(
        <UserContext.Provider value={{ logado: logado, usuario: usuario, infoUsuarios, Login }}>
            {children}
        </UserContext.Provider>
    )
}