import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [dailyGoal, setDailyGoal] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('A permissão para acessar a galeria é necessária para escolher uma foto de perfil.');
        }
      }
    })();
  }, []);

  const handleSaveGoal = () => {
    console.log('Objetivo do dia salvo:', dailyGoal);
    // Lógica para salvar o objetivo do dia
  };

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Seu Perfil</Text>
      <TouchableOpacity onPress={handleChoosePhoto} style={styles.profileImageContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Text style={styles.addPhotoText}>Adicionar Foto</Text>
        )}
      </TouchableOpacity>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>Ana Carolini</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>ana@example.com</Text>
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.label}>Objetivo do Dia:</Text>
        <TextInput
          style={styles.goalInput}
          onChangeText={text => setDailyGoal(text)}
          value={dailyGoal}
          placeholder="Digite seu objetivo do dia"
          multiline={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSaveGoal}>
        <Text style={styles.buttonText}>Salvar Objetivo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  addPhotoText: {
    fontSize: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
  },
  goalContainer: {
    width: '100%',
    marginBottom: 20,
  },
  goalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
