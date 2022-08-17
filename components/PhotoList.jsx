import { ScrollView } from "react-native";
import PhotoCard from "./PhotoCard";
import { photoListStyles } from "../assets/styles";

const bsPhotos = [
  { id: 1, description: "Selfie with Mom" },
  { id: 2, description: "Photo of breakfast" },
  { id: 3, description: "Airplane wing in sky" },
  { id: 4, description: "My nails painted" },
  { id: 5, description: "Abandoned" },
  { id: 6, description: "French bulldog puppy" },
  { id: 7, description: "Wynwood wall graffiti" },
  { id: 8, description: "Black and white skyline" },
  { id: 9, description: "My legs at the beach" },
  { id: 10, description: "Latte art with biscuit" },
];

function PhotoList() {
  return (
    <ScrollView style={photoListStyles.photoList}>
      {bsPhotos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </ScrollView>
  );
}

export default PhotoList;
