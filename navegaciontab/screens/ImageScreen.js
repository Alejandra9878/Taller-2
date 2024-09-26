// screens/ImageScreen.js
import React from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ImageScreen = ({ navigation }) => {
  const images = [
    {
      uri: 'https://i.pinimg.com/736x/f9/00/7b/f9007b40031449151b374c46541918bf.jpg',
      description: 'Lilo y Stitch en la playa.'
    },
    {
      uri: 'https://i.pinimg.com/736x/d2/8f/fc/d28ffc112525d4512cf13fb736b4ec43.jpg',
      description: 'Un momento divertido de Lilo y Stitch.'
    },
    {
      uri: 'https://i.pinimg.com/236x/e4/98/dc/e498dcc7acac5dd5042e025de48eb004.jpg',
      description: 'Lilo con su amiga Stitch.'
    },
    {
      uri: 'https://i.etsystatic.com/42429056/r/il/f46f68/5839068400/il_fullxfull.5839068400_ue48.jpg',
      description: 'Arte de Lilo y Stitch.'
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPLf5vGy2Cq2bgI3FNXiUXw-EQwz0WLeTDg&s',
      description: 'Stitch en acción.'
    },
    {
      uri: 'https://www.esimagenes.com/pimagen/lilo-stitch-png.png',
      description: 'Stitch con su expresión única.'
    },
  ];

  const handleImagePress = (uri, description) => {
    navigation.navigate('Detail', { imageUri: uri, description }); // Navega a DetailScreen
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress(image.uri, image.description)}>
            <Image
              style={styles.image}
              source={{ uri: image.uri }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f0f8ff',
  },
  scrollViewContainer: {
    alignItems: 'center', 
    paddingBottom: 20,
  },
  image: {
    width: 210,
    height: 250,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default ImageScreen;

  