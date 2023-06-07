import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';
import { useAuth } from "../context/auth";
import React, {useState} from 'react';

export default function SignIn() {
  const { signIn } = useAuth();
  const [mailAdress, setMailAdress] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* formulaire de connexion avec adress mail et password*/}
      <TextInput
          value={mailAdress}
          onChangeText={(mailAdress) => setMailAdress(mailAdress)}
          placeholder={'mailAdress'}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={'password'}
          style={styles.input}
        />
      
      <Text onPress={() => signIn()}>Sign In</Text>

    </View>
  );

  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
});