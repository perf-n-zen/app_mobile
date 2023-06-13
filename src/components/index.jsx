import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Link } from "expo-router";
import Logo from '../src/assets/img/logo.svg';



export default function index() {

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