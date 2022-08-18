import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Login from "./screens/Login";
import PhotoList from "./components/PhotoList";
import About from "./screens/About";

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
        <Tab.Screen name="About" component={About} options={() => {
          return {tabBarIcon: ( ) => <Icon name='navigate-outline' type='ionicon' size='20'/>}
        }}/>
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
