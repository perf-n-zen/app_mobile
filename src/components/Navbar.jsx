import { View, Text, StyleSheet, TouchableOpacity,  } from "react-native";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Questions from "./Questions";
import Profile from "./Profile";
import Parameter from "./Parameter";
import Gear from '../assets/img/gear.svg';
import HomeIcon from  '../assets/img/home.svg';
import ProfileIcon from '../assets/img/profile.svg';
import Msg from '../assets/img/msg.svg';


export default function Navbar() {
  const [optionDisplay, setOptionDisplay] = useState(home);

  const home = "home";
  const questions = "questions";
  const profile = "profile";
  const param = "param";

  // const homeImg = require('../assets/img/home.svg');

  useEffect (() =>{
   }, [optionDisplay]);

  return (
    <View style={styles.container}>
      {optionDisplay === home && <Home />}
      {optionDisplay === questions && <Questions />}
      {optionDisplay === param && <Parameter />}
      {optionDisplay === profile && <Profile />}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => {
            setOptionDisplay(home);
            console.log(optionDisplay);
          }}
        >
          <Text style={{ color: optionDisplay === home ? "#e9c46a" : "#000" }}>
          <HomeIcon width={20} height={20}/>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOptionDisplay(questions)}>
          <Text
            style={{ color: optionDisplay === questions ? "#e9c46a" : "#000" }}
          >
           <Msg width={20} height={20}/>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOptionDisplay(profile)}>
          <Text
            style={{ color: optionDisplay === profile ? "#e9c46a" : "#000" }}
          >
             <ProfileIcon width={20} height={20}/>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOptionDisplay(param)}>
          <Text  style={{ color: optionDisplay === param ? "#e9c46a" : "#000" }}>
          <Gear width={20} height={20}/>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNav: {
    backgroundColor: "#F5F1E4",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "105%",
    height: "8%",
    alignSelf: "auto",
    marginTop: "200%",
    borderTopLeftRadius : 80,
    borderTopRightRadius : 80,
    borderWidth : 2,
     borderColor: "#E3382E",
     overflow: "hidden",
     zIndex: 1000

  },
});

//const styles = StyleSheet.create({
// bigContainer: {
//   width: '100%',
//   height: "100%",
//   backgroundColor: "green",
// },
// container: {
//   backgroundColor: "red",
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-around",
//   width: "100%",
//   height: "5%",
//   alignSelf: "auto",
//   marginTop: "195%",

// },
//});
/* 4835514 1 */


