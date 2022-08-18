import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 40,
    height: '100%',
    backgroundColor: 'white',
  },
  
});

export const photoCardStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 15,
  },
  cardHeader: {
    marginLeft: 1,
    flexDirection: "row",
  },
  cardHeaderText: {
    marginLeft: 15,
  },
  cardLocation: {
    color: "gray",
    fontSize: 12,
  },
  cardText: {
    margin: 20,
  },
  cardImage: {
    width: "100%",
    aspectRatio: 1,
    flex: 1,
  },
});

export const photoListStyles = StyleSheet.create({
  photoList: {
    flex: 1,
    backgroundColor: "white",
  },
});

export const aboutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#013220',
    flexBasis: 1,
    flexDirection: 'row', 
    alignItems: 'top',
    paddingVertical: 50,
  }, 
  avatar: {
    flex: 1,
    height: 250,
    marginHorizontal: 25,
    borderRadius: '50%',
  },
  ghButton: {
    marginLeft: 20,
    borderRadius: '50%',
  },
  liButton: {
    marginRight: 20,
    borderRadius: '50%',
  }
})
export const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});