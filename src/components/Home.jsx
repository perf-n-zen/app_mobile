import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const Home = () => {
  // const homeImg = require('../assets/img/home.svg');
  const image = {uri: "https://api-ivory-two.vercel.app/assets/image/background_APP.png"}
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode='cover' style={{justifyContent : 'center', width: "100%", height: "100%" }}>
      
    <View style={styles.logoView}>
    <Logo width={100} height={100}/>
    </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection : 'column',
    width: "100%",
    height: "100%",
  },
  logoView : {
    width: "100%",
    height: "20%",
    bottom: "30%",
    justifyContent : "center",
    alignItems : "center",
  }
});
export default Home
