import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function MediaNota() {

  const[ PrimeiraNota, setPrimeiraNota] = useState(0);
  const[ SegundaNota, setSegundaNota ] = useState(0);
  const[ TerceiraNota, setTerceiraNota ] = useState(0);
  const[ QuartaNota, setQuartaNota ] = useState(0);
  const[ QuintaNota, setQuintaNota ] = useState(0);
  const[ Resultado, setResultado ] = useState();
  const[ cor, setCor] = useState("blue");

  function CalculaResultado()
  {
    Keyboard.dismiss();
    if(PrimeiraNota != 0 && SegundaNota != 0 && TerceiraNota!=0 && QuartaNota !=0 && QuintaNota !=0){

        
          let PrimeiraNotaNovo = PrimeiraNota.replace("," , "."); 
          let SegundaNotaNovo = SegundaNota.replace("," , "."); 
          let TerceiraNotaNovo = TerceiraNota.replace("," , "."); 
          let QuartaNotaNovo = QuartaNota.replace("," , "."); 
          let QuintaNotaNovo = QuintaNota.replace("," , "."); 
         
         let ResultadoCalculado = (parseFloat(PrimeiraNotaNovo) 
                                + parseFloat(SegundaNotaNovo)
                                + parseFloat(TerceiraNotaNovo)
                                + parseFloat(QuartaNotaNovo)
                                + parseFloat(QuintaNotaNovo))/5;
         setResultado(ResultadoCalculado);

        if(ResultadoCalculado < 250){
          setCor("red");
        }
        else{
          setCor("blue");
        }
    }
  }

  return (
    <View style={styles.container}>

      <Image 
       
       />

      <Text style={styles.titulo}>Simule sua nota do ENEM</Text>
      
      <TextInput
        placeholder="Nota 1"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(digitado) => setPrimeiraNota(digitado)}
        TextInput={PrimeiraNota}
      />
       <TextInput
        placeholder="Nota 2"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(digitado) => setSegundaNota(digitado)}
        TextInput={SegundaNota}
      />
       <TextInput
        placeholder="Nota 3"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(digitado) => setTerceiraNota(digitado)}
        TextInput={TerceiraNota}
      />
       <TextInput
        placeholder="Nota 4"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(digitado) => setQuartaNota(digitado)}
        TextInput={QuartaNota}
      />
      <TextInput
        placeholder="Nota 5:"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(digitado) => setQuintaNota(digitado)}
        TextInput={QuintaNota}
      />
      <TouchableOpacity style={styles.btn} onPress={CalculaResultado}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>
      
      <Text style={[styles.Resultado , {color: cor}]}>{Resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 25,
    fontWeight: "bold",
    color:"lightblue",
    marginBottom:15
  },
  input: {
    width: "90%",
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    marginTop: 15,
    marginBottom: 25
  },
  resultado: {
    fontSize: 25,
    marginTop: 25,
    fontWeight: "bold"
  },
  btn: {
    width: "90%",
    height: 60,
    backgroundColor: "lightblue",
    borderRadius: 5
  },
  btnText: {
    color: "white",
    textAlign: "center",
    lineHeight: 60,
    fontSize: 25,
    fontWeight: "bold"

  },
  image: {
    width:100,
    height:100,
    resizeMode: "stretch",
    marginBottom: 40
  }

});