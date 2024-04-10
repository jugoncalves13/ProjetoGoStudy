import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect, } from 'react';
import { useBatteryLevel } from "expo-battery";
import * as Network from "expo-network";


const HomeScreen = ({ navigation }) => {

  const [bateria, setBateria] = useState();

  const batteryLevel = useBatteryLevel();

  useEffect(() => {
    setBateria((batteryLevel * 100).toFixed(0));
  }, [batteryLevel]);


  const [rede, setRede] = useState();



  async function getStatus() {
    const status = await Network.getNetworkStateAsync();
    if (status.type == "WIFI") {
      setRede(true);
    }
  }

  useEffect(() => {
    getStatus();
  }, [rede]);
  return (

    <View style={styles.container}>
      <Text style={styles.heading}>Bem-vindo ao GoStudy!</Text>

      <Text style={styles.description}>Seja bem-vindo ao nosso site de estudos GoStudy.</Text>
      <Image style={styles.img} source={require("../assets/imagemhome.jpg")} />

      {!rede &&
        <>
  
          <Text style={styles.textorede}>Os recursos não estão carregando por falta de internet,
            conecte-se a rede e tente novamente.</Text>
          <Image style={styles.imgrede} source={require("../assets/iconecarregar.png")} />

        </>
      }

      {bateria < 20 &&
        <>
          <Text style={styles.textobateria}>Alguns recursos não estão carregando pois o seu aparelho está com pouca bateria,
            conecte-o à uma fonte e tente novamente</Text>
          <Image style={styles.imgbateria} source={require("../assets/iconebateria.png")} />
        </>
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    height: 200,
    width: 350,
    alignItems: "center",

  },
  textobateria: {
    fontSize: 14,
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  imgbateria: {
    maxWidth: "100%",
    width: 70,
    height: 60,
    display: "flex",
  },
  textorede: {
    fontSize: 15,
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  imgrede: {
    maxWidth: "100%",
    width: 60,
    height: 60,
    display: "flex",
  }
});

export default HomeScreen;