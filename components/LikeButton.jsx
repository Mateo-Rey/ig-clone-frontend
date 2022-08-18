import React from "react";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const LikeButton = ({liked, setLiked}) => {

  return (
    <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
      <MaterialCommunityIcons
        name={liked ? "heart" : "heart-outline"}
        size={32}
        color={liked ? "red" : "black"}
      />
    </Pressable>
  );
};