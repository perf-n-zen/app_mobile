import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './src/components/Navbar';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navbar/>
    </NavigationContainer>
  );
}

export default App;