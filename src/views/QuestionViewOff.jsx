import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function QuestionViewOff() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold",fontSize:20}}>Pas de questionnaire pour le moment.</Text>
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
});