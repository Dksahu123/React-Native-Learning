import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../Config";
import { ref, set, onValue } from "firebase/database";

export default function Fetchdata() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tododata, setTododata] = useState([]);
  const [show, setShow] = useState(0);

  const addData = () => {
    set(ref(db, "posts/" + title), {
      title: title,
      body: body,
    });
    setTitle("");
    setBody("");
  };

  const getdata = () => {
    setShow(1);
  };

  useEffect(() => {
   
    const startcount = ref(db, "posts");
    onValue(startcount, (snapshot) => {
      const data = snapshot.val();
      const newpost = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      console.log("newpost", newpost);
      setTododata(newpost);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Adddata Realtime Db & Expo</Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={(text) => setBody(text)}
        style={styles.input}
      />

      <Button title="Add Data" onPress={addData} />

      <Button title="Get Data " onPress={getdata} />

      {show == 1 ? (
        <View style={{ flex: 1, marginTop: 20 }}>
          {tododata.map((item, index) => {
            return (
              <ScrollView>
                <View>
                  <Text style={styles.text}>Title </Text>
                  <Text style={{ color: "blue" }}>{item.title}</Text>
                  <Text style={styles.text}> Body </Text>
                  <Text style={{ color: "blue" }}>{item.body}</Text>
                </View>
              </ScrollView>
            );
          })}
        </View>
      ) : (
        "No Data Here"
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 100,
    fontWeight: "bold",
    
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  text: {
    fontSize: 20,

    marginTop: 20,
  },
});
