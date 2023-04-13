import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../Config";
import { Image } from "react-native";

const Dashboard = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    firebase
      .firestore()
      .collection("Users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("user does not exist");
        }
      });
  }, []);
  return (
    <SafeAreaView style={StyleSheet.container}>
      <Text
        style={{
          fontsize: 200,
          color: "blue",
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          marginTop: 20,
          borderStyle:'solid',
          borderColor:'red',
          fontSize:'24px',
          backgroundColor:'#ffdba6'
          
        }}
      >
        Welcome. {name.firstname}_{name.lastname}
      </Text>

      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/dp.avif")}
          resizeMode="cover"
          style={styles.image}
        >
          {/* <Text style={styles.text}>Inside</Text> */}
        </ImageBackground>
      </View>

      <TouchableOpacity
        onPress={() => {
          firebase.auth().signOut();
        }}
        style={styles.button}
      >
        <Text style={{ fontsize: 22, fontWeight: "bold" }}>Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },

  button: {
    width: 150,
    height: 50,
    backgroundColor: "#026efd",
    marginTop: "300px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: "120px",
  },
  image: {
    justifyContent: "center",
    width: "100%",
    height: "300%",
    marginTop: 70,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
