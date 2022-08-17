
import { View, Text, TextInput } from "react-native";
import { loginStyles } from "./../assets/styles";


function Login() {
  return (
    <View style={loginStyles.headerBar}>
      <TextInput style={loginStyles.headerText} placeholder='please input your username'></TextInput>
      <TextInput style={loginStyles.headerText} placeholder='please input your password' secureTextEntry={true}></TextInput>
    </View>
  );
}

export default Login;
