import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";
import PhotoList from "./components/PhotoList";

const Tab = createBottomTabNavigator()

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
