import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const Home = () => {
  const homeImg = require('../assets/img/home.svg');
  const imgBack = require('../assets/img/imageFond.png');
  return (
    
 <ImageBackground source={imgBack} style={styles.container} resizeMode='cover'>
  <Text style={{top:500}}> Hello home</Text>
 </ImageBackground>
 


    
  )
}
 const styles = StyleSheet.create({
  container:  {
    display: 'flex',
    width: "100%",
    height: "150%",
    zIndex: -1
  },
  image: {
    
  }
 })
export default Home
