import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './src/components/Navbar';
import Login from './src/components/Login';
import Linking from './src/assets/Linking';






function App() {
  return (
    <NavigationContainer linking={Linking}>
    {/* <Login/> */}
      <Navbar/>
    </NavigationContainer>
  );
}

export default App;