import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen2 = ({ navigation, route }) => {
  const { data } = route.params; // Retrieve parameters from Screen1

  const handlePress = (destination) => {
    const params = destination === 'Screen3'
      ? { message2: 'Message from Screen 2', goTo: 'Screen1' } // Pass parameters for Screen 3
      : { goTo: 'Screen1' }; // Parameter for going back to Screen1

    navigation.navigate(destination, params);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>
      <Text style={styles.text}>Received Data: {data}</Text>

      <Button
        title="Go to Screen 3"
        onPress={() => handlePress('Screen3')} // Use 'Screen3'
      />

      <Button
        title="Go to Main Screen"
        onPress={() => handlePress('Screen1')} // Use 'Screen1'
      />

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Screen2;
