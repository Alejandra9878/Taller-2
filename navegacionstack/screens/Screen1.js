// screens/Screen1.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  const someData = "Hello from Screen1";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 1</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2', { data: someData })}
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

export default Screen1;
