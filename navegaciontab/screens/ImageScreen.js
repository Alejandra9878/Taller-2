// screens/ImageScreen.js
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery of Images</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Local or URL images */}
        <Image
          style={styles.image}
          source={{ uri: 'https://lafrikileria.com/blog/wp-content/uploads/2023/04/origen-stitch.jpg' }} // Image from URL
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/736x/d2/8f/fc/d28ffc112525d4512cf13fb736b4ec43.jpg' }} // Image from URL
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/236x/e4/98/dc/e498dcc7acac5dd5042e025de48eb004.jpg' }} // Image from URL
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://i.etsystatic.com/42429056/r/il/f46f68/5839068400/il_fullxfull.5839068400_ue48.jpg' }} // Image from URL
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/564x/19/0c/27/190c27474db5307c24eddb67817f2de8.jpg' }} // Image from URL
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://www.esimagenes.com/pimagen/lilo-stitch-png.png' }} // Image from URL
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  scrollViewContainer: {
    alignItems: 'center', // Center the images horizontally
  },
  image: {
    width: 210,
    height: 250,
    marginBottom: 15,
  },
});

export default ImageScreen;
