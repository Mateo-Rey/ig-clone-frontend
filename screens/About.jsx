import { View, Image, Linking } from "react-native";
import { Button, Icon } from "react-native-elements";
import { aboutStyles } from "../assets/styles";
import { Zocial } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const About = () => {
  return (
    <>
      <View style={aboutStyles.container}>
        <Button
          style={aboutStyles.ghButton}
          rounded
          title={<Zocial name="github" size={40} color="black" />}
          onPress={() => {
            Linking.openURL("https://github.com/Mateo-Rey");
          }}
        />
        <Image
          source={require("./Mateo_HeadShot.jpg")}
          style={aboutStyles.avatar}
        />
        <Button
          style={aboutStyles.liButton}
          rounded
          title={<Ionicons name="ios-logo-linkedin" size={40} color="black" />}
          onPress={() => {
            Linking.openURL("https://www.linkedin.com/in/mateo-rey-132926245/");
          }}
        />
      </View>
    </>
  );
};

export default About;
