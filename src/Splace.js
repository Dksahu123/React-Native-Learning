import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Image } from "react-native";

const splace = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2500);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("./Images/nxgsols.png")}
        style={{
          width: "100%",
          height: 180,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 30,
        }}
      />
      <Image
        source={require("./Images/load3.gif")}
        style={{
          width: "50%",
          height: 50,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 20,
          color: "red",
        }}
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: "700",
          marginTop: 10,
          color: "lightblue",
          alignSelf: "center",
          alignItems: "center",
          backgroundColor:'#ed143d'
        }}
      >
        NXG SOLUTIONS RAIPUR
      </Text>
    </View>
  );
};

export default splace;
