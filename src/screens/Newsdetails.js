import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const Newsdetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>

      <View>

        <TouchableOpacity 
        
        onPress={()=>{
          navigation.navigate('mainscr')
        }
      }
        >

<Image
        source={require('../Images/bck.jpg')}
        style={{ width: "15%", height: 40 ,marginTop:10,color:"black",marginLeft:5}}
      />
      <Text  style={{color:'#fff',marginLeft:5,flexDirection:'row'}}>Go Back</Text>
      </TouchableOpacity>
</View>
      <Image
        source={{ uri: route.params.data.urlToImage }}
        style={{ width: "100%", height: 200 }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "800",
          color: "#fff",
          marginTop: 10,
          alignSelf: "center",
          width: "94%",
        }}
      >
        {route.params.data.title}
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: "#fff",
          marginTop: 10,
          alignSelf: "center",
          width: "94%",
        }}
      >
        {route.params.data.description}
      </Text>


      <Text style={{
          fontSize: 12,
          fontWeight: "600",
          color: "#fff",
          marginTop: 10,
          alignSelf: "center",
          width: "94%",
          color:'red'
        }}>
        {route.params.data.publishedAt}</Text>


        <Text style={{
          fontSize: 15,
          fontWeight: "600",
          color: "#fff",
          marginTop: 10,
          alignSelf: "center",
          width: "94%",
        }}>
        {route.params.data.content}</Text>
    </View>
  );
};

export default Newsdetails;
