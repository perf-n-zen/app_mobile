import { View, Text, StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState, useEffect } from "react";

export default function QuestionViewOn() {
    const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold",fontSize:20}}>Le questionnaire est disponible !</Text>
      <View style={styles.checkView}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#ED7C34' : undefined}
        />
        <Text style={styles.stayConnect}>Je souhaite être anonyme</Text>

        </View>
    </View>
  )
}
const styles = StyleSheet.create({
container: {
    height:200,
    width:350,
    backgroundColor:"rgba(255, 255, 255, 0.5)",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:45,
},
checkView : {
    marginTop: 10,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    
  },
});