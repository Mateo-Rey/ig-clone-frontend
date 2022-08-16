import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PhotoCard from "./PhotoCard";

const bsPhotos = [
    { id: 1, description: 'Selfie with Mom'},
    { id: 2, description: 'Photo of breakfast'},
    { id: 3, description: 'Airplane wing in sky'},
    { id: 4, description: 'My nails painted'},
    { id: 5, description: 'Abandoned'},
    { id: 6, description: 'French bulldog puppy'},
    { id: 7, description: 'Wynwood wall graffiti'},
    { id: 8, description: 'Black and white skyline'},
    { id: 9, description: 'My legs at the beach'},
    { id: 10, description: 'Latte art with biscuit'},
]

function PhotoList() {
    return (
        <ScrollView style={styles.photoList}>
            {bsPhotos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    photoList: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    }
})



export default PhotoList;