import { Slot } from "expo-router";
import Navbar from "./Navbar";
import Login from "./Login";
import { Provider } from "./context/auth";

export default function HomeLayout() {
    return (
    <>
    <Provider>
      <Slot />
       <Navbar />
      {/* { <Login/> } */}
    </Provider>
    </>
  );

}