import { View, Text, StyleSheet, TouchableOpacity,  } from "react-native";
import Gear from '../src/assets/img/gear.svg';
import HomeIcon from  '../src/assets/img/home.svg';
import ProfileIcon from '../src/assets/img/profile.svg';
import Msg from '../src/assets/img/msg.svg';
import { Link } from 'expo-router';


export default function Navbar() {

  return (
    <View style={styles.container}>
     <Link href="/" asChild>
     <TouchableOpacity style={styles.Touchable}>
      <HomeIcon/>
     </TouchableOpacity>
     </Link>

      <Link href="/Questions" asChild>
      <TouchableOpacity style={styles.Touchable}>
        <Msg/>
      </TouchableOpacity>
      </Link>

      <Link href="/Profile" asChild>
      <TouchableOpacity style={styles.Touchable}>
        <ProfileIcon />
      </TouchableOpacity>
      </Link>

      <Link href="/Parameter" asChild>
      <TouchableOpacity style={styles.Touchable}>
        <Gear />
      </TouchableOpacity>
      </Link>
</View>
 
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: "absolute",
    bottom: 0,
    paddingBottom: 8,
    width: "100%",
    height: "10%",
    flexDirection : "row",
    backgroundColor: "#fff",
    borderTopColor: "#F5A25C",
    borderTopWidth: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Touchable : {
    

    padding: 8,



  }
})


