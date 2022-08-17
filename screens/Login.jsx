
import { View, Text } from "react-native";
import { loginStyles } from "./../assets/styles";


function Login() {
  return (
    <View style={loginStyles.headerBar}>
      <Text style={loginStyles.headerText}> IG Clone</Text>
    </View>
  );
}

export default Login;
