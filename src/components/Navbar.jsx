import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Gear from "../assets/img/gear.svg";
import HomeIcon from "../assets/img/home.svg";
import ProfileIcon from "../assets/img/profile.svg";
import Msg from "../assets/img/msg.svg";
import Parameter from "./Parameter";
import Home from "./Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Questions from "./Questions";
import Profile from "./Profile";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Navbar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
     tabBarStyle: { height : 80, backgroundColor: "#2C2B51"},
     headerShown: false,
     tabBarShowLabel : false,
    tabBarActiveTintColor: '#ED7C34',
    tabBarInactiveTintColor : "white"
    }}

        >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen name="Question" component={Questions} 
         options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={40} />
          ),
        }}
      />

      <Tab.Screen name="Profile" component={Profile} 
           options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={40} />
          ),
        }}
      />

      <Tab.Screen name="Settings" component={Parameter}
      options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={40} />
          ),
        }}
       />
    </Tab.Navigator>

    //     <View style={styles.container}>
    //      <Link href="/" asChild>
    //      <TouchableOpacity style={styles.Touchable}>
    //       <HomeIcon/>
    //      </TouchableOpacity>
    //      </Link>

    //       <Link href="/Questions" asChild>
    //       <TouchableOpacity style={styles.Touchable}>
    //         <Msg/>
    //       </TouchableOpacity>
    //       </Link>

    //       <Link href="/Profile" asChild>
    //       <TouchableOpacity style={styles.Touchable}>
    //         <ProfileIcon />
    //       </TouchableOpacity>
    //       </Link>

    //       <Link href="/Parameter" asChild>
    //       <TouchableOpacity style={styles.Touchable}>
    //         <Gear />
    //       </TouchableOpacity>
    //       </Link>
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    paddingBottom: 8,
    width: "100%",
    height: "10%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopColor: "#F5A25C",
    borderTopWidth: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Touchable: {
    padding: 8,
  },
});
