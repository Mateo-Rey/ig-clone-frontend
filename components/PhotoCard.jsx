import { View, Image, Text, ActivityIndicator } from "react-native";
import { photoCardStyles } from "../assets/styles";
import { Avatar, Icon } from "react-native-elements";
import { useState } from "react";
import { LikeButton } from "./LikeButton";
function PhotoCard({ photo }) {
  const [liked, setLiked] = useState();
  const BASE_URL = "https://source.unsplash.com/random?miami=";

  return (
    <>
      <View style={photoCardStyles.cardContainer}>
        <View style={photoCardStyles.cardHeader}>
          <Avatar
            rounded
            source={{
              uri: `https://randomuser.me/api/portraits/men/${photo.id}.jpg`,
            }}
          />

          <View style={photoCardStyles.cardHeaderText}>
            <Text> Header Text </Text>
            <Text style={photoCardStyles.cardLocation}> location </Text>
          </View>
        </View>

        <Icon name="more-vert"></Icon>
      </View>

      <Image
        source={{ uri: BASE_URL + 1 }}
        style={photoCardStyles.cardImage}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View>
        <Text style={photoCardStyles.cardText}> text here </Text>
        <LikeButton liked={liked} setLiked={setLiked} />
      </View>
    </>
  );
}

export default PhotoCard;
