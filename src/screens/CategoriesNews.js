import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CategoriesNews() {
  const [news, setNews] = useState([]);

  const route=useRoute();

  const navigation = useNavigation();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
      .then((res) => res.json())
      .then((json) => {
        setNews(json.articles);

     
      });
      console.log("hhhhh",news)
      console.log("ggggggg",json)
  };

  console.log("news223232", news);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", backgroundColor: "#000" }}>
      
      <View style={{ marginTop: 20, height: 170 }}>
        <FlatList
          horizontal
          data={[
            { title: "Technologies", image: require("../Images/tech.webp") },
            { title: "Cricket", image: require("../Images/crc.jpg") },
            { title: "Public", image: require("../Images/pub.webp") },
            { title: "DEsh-duniya", image: require("../Images/desh.jpg") },
            { title: "Business", image: require("../Images/bus.avif") },
          ]}
          renderItem={({ item, indx }) => {
            return (
              <TouchableOpacity
                style={{
                  width: 200,
                  height: 150,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#fff",
                  marginLeft: 15,
                }}
              >
                <View
                  style={{ width: "100%", height: "100%", borderRadius: 20 }}
                >
                  <Image
                    source={item.image}
                    style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  />

                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 20,
                      position: "absolute",
                      top: 0,
                      backgroundColor: "rgba(0,0,0,.5)",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "800",
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        Head_Lines{" "}
      </Text>

      <View>
        <FlatList
          data={news}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  borderColor: "#fff",
                  borderWidth: 1,
                  width: "90%",
                  height: 100,
                  alignSelf: "center",
                  marginTop: 20,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => {
                  navigation.navigate("Newsdetails", { data: item });
                }}
              >
                <Image
                  source={{ uri: item.urlToImage }}
                  style={{ width: 100, height: 90, borderBottomLeftRadius: 10 }}
                />
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      color: "#fff",
                      width: "45%",
                      fontSize: 15,
                      fontWeight: "700",
                    }}
                  >
                    {item.title}
                  </Text>

                  <Text
                    style={{
                      color: "#fff",
                      width: "70%",
                      fontSize: 12,
                      marginTop: 10,
                    }}
                  >
                    {item.description.substring(0, 30) + "..."}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
