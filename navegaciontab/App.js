import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import WelcomeScreen from './screens/welcomeScreen';
import ImageScreen from './screens/ImageScreen';
import OptionsScreen from './screens/OptionsScreen';
import QuizScreen from './screens/QuizScreen';
import DetailScreen from './screens/DetailScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ImageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Image1" component={ImageScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Welcome') {
              iconName = 'home';
            } else if (route.name === 'Image') {
              iconName = 'image';
            } else if (route.name === 'Options') {
              iconName = 'settings';
            } else if (route.name === 'Quiz') {
              iconName = 'question-answer';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Image" component={ImageStack} />
        <Tab.Screen name="Options" component={OptionsScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
