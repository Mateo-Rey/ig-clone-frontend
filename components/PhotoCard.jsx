import { View, Image, Text } from "react-native";
import { photoCardStyles } from "../assets/styles";
import { Avatar, Icon  } from 'react-native-elements'


function PhotoCard({ photo }) {
    
    const BASE_URL = 'https://source.unsplash.com/random?miami='

  return (
    <>
      <View style={photoCardStyles.cardContainer}>
        <View style={photoCardStyles.cardHeader}>
          {/* avatar */}
        <Avatar rounded source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}/>
        

          <View style={photoCardStyles.cardHeaderText}>
            <Text> Header Text </Text>
            <Text style={photoCardStyles.cardLocation}> location </Text>
          </View>

        </View>
        <Icon name='code' />
      </View>

      <Image source={{uri: BASE_URL + 1}} style={photoCardStyles.cardImage} />
      <Text style={photoCardStyles.cardText}> text here </Text>
    </>
  );
}

export default PhotoCard;
