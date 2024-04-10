import { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { UserContext } from './Context/UserContext';

export default function Login() {

    const{Login} = useContext( UserContext );

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro ] = useState(false);

    function realizaLogin()
    {
        Login( email, senha );
    }

    return (
        <View style={css.container}>
            <TextInput
                placeholder='Email'
                onChangeText={(digitado) => setEmail(digitado) }
                value={email}
                style={css.input}
            />
            <TextInput
                placeholder='Senha'
                onChangeText={(digitado) => setSenha(digitado) }
                value={senha}
                style={css.input}
            />
            <TouchableOpacity onPress={realizaLogin} style={css.btn}>
                <Text style={css.btnText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({
    container: 
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    input: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        marginBottom: 25
    },
    btn: {
        width: "80%",
        height: 50,
        backgroundColor: "#87CEFA",
        borderRadius: 5,
        marginBottom: 10
    },
    btnText: {
        fontSize: 20,
        lineHeight: 50,
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    }
})