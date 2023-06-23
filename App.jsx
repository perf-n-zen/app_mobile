import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login';
import Home from './src/components/Home';
import Navbar from './src/components/Navbar';

const Stack = createNativeStackNavigator();

function SplashScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Getting token...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}



function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUser] = useState(null);

  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(2000);
      const token = null;
      setUser(token);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (<>
  
  <NavigationContainer>
    {userToken == null ? (
      <>
        
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: 'Sign in',
              }}
              initialParams={{ setUser }} />
          </Stack.Navigator>
      </>
    ) : (
      <Navbar />
    )}
  </NavigationContainer>
  </>
  );
}

export default App;