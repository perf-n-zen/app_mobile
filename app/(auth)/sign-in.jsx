import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';
import { useAuth } from "../context/auth";
import React, {useState} from 'react';

export default function SignIn() {
  const { signIn } = useAuth(mailAdress, password);
  const [mailAdress, setMailAdress] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* formulaire de connexion avec adress mail et password*/}
      
      
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