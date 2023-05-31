import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Questions from "./Questions";
import Profile from "./Profile";
import Parameter from "./Parameter";

export default function Navbar() {
  const [optionDisplay, setOptionDisplay] = useState(home);

  const home = "home";
  const questions = "questions";
  const profile = "profile";
  const param = "param";

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
          <Text style={{ color: optionDisplay === home ? "#e9c46a" : "#ffff" }}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOptionDisplay(questions)}>
          <Text
            style={{ color: optionDisplay === questions ? "#e9c46a" : "#ffff" }}
          >
            Questions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOptionDisplay(profile)}>
          <Text
            style={{ color: optionDisplay === profile ? "#e9c46a" : "#ffff" }}
          >
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOptionDisplay(param)}>
          <Text  style={{ color: optionDisplay === param ? "#e9c46a" : "#ffff" }}>
            Parameter
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    // <View style={styles.container}>
    //   <View>
    //     <TouchableOpacity onPress={ () => setPage(home)}>
    //       <Text>Home</Text>
    //     </TouchableOpacity>
    //   </View>

    //   <View>
    //     <TouchableOpacity onPress={ () => setPage(msg)}>
    //       <Text>Msg</Text>
    //     </TouchableOpacity>
    //   </View>

    //   <View>
    //   <TouchableOpacity onPress={ () => console.log("pressed !")}>
    //     <Text>Profile</Text>
    //   </TouchableOpacity>
    //   </View>

    //   <View>
    //   <TouchableOpacity onPress={ () => console.log("pressed !")}>
    //     <Text>Param</Text>
    //   </TouchableOpacity>
    //   </View>
    // </View>
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
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "5%",
    alignSelf: "auto",
    marginTop: "195%",
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
