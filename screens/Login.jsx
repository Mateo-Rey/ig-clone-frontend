import { View, Text } from "react-native";
import { loginStyles } from "./../assets/styles";
import { Button, Input } from "react-native-elements";

function Login() {
  return (
    <View style={loginStyles.container}>
      <Input
        placeholder="Email"
        keyboardAppearance="dark"
        keyboardType="email-address"
        autoCapitalize={false}
        autoCorrect={false}
      ></Input>
      <Input
        placeholder="Password"
        secureTextEntry={true}
        keyboardAppearance="dark"
      ></Input>
      <Button title='Submit'/>
    </View>
  );
}

export default Login;
