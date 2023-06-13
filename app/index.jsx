import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Link } from "expo-router";
import Logo from '../src/assets/img/logo.svg';
import QuestionViewOff from '../src/views/QuestionViewOff';
import QuestionViewOn from '../src/views/QuestionViewOn';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function index() {

const image = {uri: "https://api-ivory-two.vercel.app/assets/image/background_APP.png"}
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode='cover' style={{justifyContent : 'center', width: "100%", height: "100%" }}>
      
    <View style={styles.logoView}>
    <Logo width={100} height={100}/>
    </View>
    <View style={styles.questionPosition}>
     <QuestionViewOn/>
     </View>
     <TouchableOpacity style={styles.test}>
      <Text>test</Text>
     </TouchableOpacity>
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
    bottom: "15%",
    justifyContent : "center",
    alignItems : "center",
   
  },
  questionPosition: {
    justifyContent : "center",
    alignItems : "center",
   
  },
  test : {
    borderWidth:2,
  }


 

});