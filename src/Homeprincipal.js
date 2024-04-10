import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.heading}>Bem-vindo ao GoStudy!</Text>

      <Text style={styles.description}>Seja bem-vindo ao nosso site de estudos GoStudy.</Text>
      <Image style={styles.img} source={require("../assets/imagemhome.jpg")}/>
      
     
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
  img:{
    height: 200,
    width: 350,
    alignItems: "center",
   
  }
});

export default HomeScreen;