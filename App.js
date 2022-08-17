import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Login from "./screens/Login";
import PhotoList from "./components/PhotoList";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={() => {
        return {
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
        }
      }}>
        <Tab.Screen
          name="Home"
          component={PhotoList}
          options={() => {
            return {
              tabBarIcon: () => (
                <Icon
                  name="house"
                  size="20"
                />
              ),
            };
          }}
        />
        <Tab.Screen name="Login" component={Login} options={() => {
          return {tabBarIcon: () => <Icon name='sc-telegram' type='evilicon' size='20'/>}
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    //   <SafeAreaView style={styles.safeArea}>
    //   <Login />
    //   <PhotoList />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
});
