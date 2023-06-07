import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import Checkbox from 'expo-checkbox';
import React, { useState, useEffect } from "react";



export default function Login() {
  const staticImage = require("../assets/img/perf.png");

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [validId, setValidId ] = useState(false);
  const [validPwd, setValidPwd ] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isChecked, setChecked] = useState(false);

const regExpID = new RegExp(/^[_a-zA-Z][_a-zA-Z0-9]{3,20}/)
const regExpPwd = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)

  const sendValue = () => {
    console.log("value de nos input : ", id, " ", pwd);
    setDisabled(true);
    setId("");
    setPwd("");
  };

  const checkForm = (regExp) => {

    if(regExp.test(pwd)){
      setDisabled(false);
      setValidPwd(true)
    } else {
      setDisabled(true);
      setValidPwd(false);
    }

  };

  useEffect(() => {
  }, [id]);

  useEffect(() => {}, [disabled]);

  console.log(disabled);
  return (
    <View style={styles.container}>

    <View style={styles.titleDiv}>
    <Text></Text>
    <Image source={staticImage} style={{width: 400, height: 400}} />
    </View>
  
    <View style={styles.connectionView}>

    <Text style={styles.title}>
      Connectez-vous pour continuer !
    </Text>
      <TextInput
        style={styles.input}
        placeholder="Identifiant"
        placeholderTextColor="#FFF"
        type="text"
        value={id}
        onChangeText={(userEntry) => {
          setId(userEntry);
          checkForm(regExpID, userEntry);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#FFF"
        type="password"
        value={pwd}
        onChangeText={(userEntry) => {
          setPwd(userEntry);
          checkForm(regExpPwd, userEntry)
        }}
      />
        <View style={styles.checkView}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#ED7C34' : undefined}
        />
        <Text style={styles.stayConnect}>Se souvenir de moi</Text>
        <Text style={styles.forgetPwd}>Mot de passe oublié ?</Text>
        </View>

      <TouchableOpacity
        onPress={sendValue}
        style={styles.btn}
        disabled={disabled}
      >
        <Text style={styles.btnText}>Connecter</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  titleDiv: {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
  },
  connectionView: {
    width: '100%',
    height: '50%',
    backgroundColor: "#2C2B51",
  },
  title: {
    color: 'white',
    fontSize: 25,
    left: 120,
  },
  input: {
    height: 50,
    width: 340,
    margin: 22,
    borderBottomWidth: 1,
    padding: 10,
    top: 20,
    left: 15,
    color: "white",
    borderColor: "white",
  },
  inputFalse: {
    height: 50,
    width: 300,
    margin: 22,
    borderBottomWidth: 1,
    padding: 10,
    top: 300,
    color: "red",
    borderColor: "red",
  },
  inputTrue: {
    height: 50,
    width: 300,
    margin: 22,
    borderBottomWidth: 1,
    padding: 10,
    top: 300,
    color: "green",
    borderColor: "green",
  },
  checkView : {
    marginTop: 10,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-evenly",
  },
  checkbox: {
    left: 50,
  },
  stayConnect: {
    color: "white",
    fontSize: 10,
    left: 60
  },
  forgetPwd : {
    color: "white",
    fontSize: 10,
    left: 130
  },
  btn: {
    height: 50,
    width: 310,
    left: 30,
    borderWidth: 2,
    borderColor: "#E3382E",
    margin: 22,
    top: 20,
    borderRadius: 10,
    paddingTop: 11,
    paddingLeft: 115,
    backgroundColor: "#2C2B51",
  },
  btnText: {
    color: "white",
  },
});
