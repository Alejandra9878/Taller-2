import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen3 = ({ route, navigation }) => {
  const { message2, goTo } = route.params || {}; // Handle case where there are no parameters

  const resetNavigation = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Screen1' }] // Reset the stack with Screen1
    });
  };

  const handleConditionalNavigation = () => {
    if (goTo === 'Screen1') {
      navigation.navigate('Screen1');
    } else if (goTo === 'Screen2') {
      navigation.navigate('Screen2');
    } else {
      alert('No screen to navigate to.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 3</Text>
      {message2 && <Text style={styles.text}>Received Message: {message2}</Text>}

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Reset to Main Screen"
        onPress={resetNavigation}
      />
      <Button
        title="Conditional Navigation"
        onPress={handleConditionalNavigation}
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

export default Screen3;


