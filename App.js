import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import Login from "./screens/Login";
import PhotoList from "./components/PhotoList";


export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Login />
      <PhotoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
 
});
