import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
//import { Link } from "expo-router";
import Logo from "../assets/img/logo.svg";
import QuestionViewOff from "../views/QuestionViewOff";
import QuestionViewOn from "../views/QuestionViewOn";
import { useState } from "react";

export default function Home() {
  const image = {
    uri: "https://api-ivory-two.vercel.app/assets/image/background_APP.png",
  };
  const [showQuestion, setShowQuestion] = useState(true);

  const toggleQuestion = () => {
    if (showQuestion === true) {
      setShowQuestion(false);
    } else if (showQuestion === false) {
      setShowQuestion(true);
    }
  };
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{ justifyContent: "center", width: "100%", height: "100%" }}
    >
      <View style={styles.logoView}>
        <Logo width={100} height={100} />
      </View>

      {showQuestion === true ? <QuestionViewOn style={styles.questionPosition} /> : <QuestionViewOff style={styles.questionPosition} />}

      <TouchableOpacity
        style={{ zIndex: 3 }}
        onPress={() => toggleQuestion()}
      >
        <Text>TEST</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  logoView: {
    width: "100%",
    height: "20%",
    bottom: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  questionPosition: {
    justifyContent: "center",
    alignItems: "center",
  },
  test: {
    borderWidth: 2,
  },
});
