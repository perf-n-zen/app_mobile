import { Slot } from "expo-router";
import Navbar from "./Navbar";
import { Provider } from "./context/auth";

export default function HomeLayout() {
    return (
    <>
    <Provider>
      <Slot />
      <Navbar />
    </Provider>
    </>
  );

}