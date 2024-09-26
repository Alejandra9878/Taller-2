// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import LiloAndStitchImage from '../assets/lilo-and-stitch.jpeg'; // Ajusta la ruta según la ubicación de tu imagen

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={LiloAndStitchImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>¡Bienvenido a la App de Lilo y Stitch!</Text>
        </View>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Image')} 
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover', // Cambia a 'cover' para llenar todo el fondo
    opacity: 0.9,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start', // Cambiar a flex-start para alinear al inicio
    alignItems: 'center',
    paddingBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 70, // Ajusta este valor para mover el texto hacia arriba
  },
  button: {
    backgroundColor: '#6200ee',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
});

export default WelcomeScreen;

 

