import { Slot } from "expo-router";
import Navbar from "./Navbar";

export default function HomeLayout() {
    return (
    <>
      <Slot style={{marginTop: '5%', marginBottom: '5%'}} />
      <Navbar />
    </>
  );

}