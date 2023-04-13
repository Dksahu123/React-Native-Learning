import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../Config";
import {useNavigation } from '@react-navigation/native'
const Registration = () => {

    const navigation=useNavigation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const regitserUser = async (email, password, firstname, lastname) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "http://emailauthentication-13425.firebaseapp.com",
          })
          .then(() => {
            
            alert("Verification Email Sent");
            
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("Users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstname,
                lastname,
                email,
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return(

  
    <View style={styles.container}>
         
        <Text style={{fontWeight:'bold',fontSize:23,color:'#008b8b'}}>
            Registration Here..!!
        </Text>
        <ScrollView>
        <View style={{marginTop:40}}>
            <TextInput 
            style={styles.textinput}
            placeholder=" First Name"
            onChangeText={(firstname)=>setFirstname(firstname)}
            autoCorrect={false}
            value={firstname}
            />
              <TextInput 
            style={styles.textinput}
            placeholder=" Last Name"
            onChangeText={(lastname)=>setLastname(lastname)}
            autoCorrect={false}
            value={lastname}
            />

<TextInput 
            style={styles.textinput}
            placeholder=" Email-Address"
            onChangeText={(email)=>setEmail(email)}
            autoCorrect={false}
            value={email}
            keyboardType="email-address"
            />
            <TextInput 
            style={styles.textinput}
            placeholder=" Password"
            onChangeText={(password)=>setPassword(password)}
            autoCorrect={false}
            value={password}
            secureTextEntry={true}
            />

        </View>

        <TouchableOpacity 
        onPress={()=>regitserUser(email,password,firstname,lastname)}
        style={styles.button}
        >


            <Text style={{fontSize:22,fontWeight:'bold'}}>Register</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
  )
};

export default Registration;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100
    },
    textinput:{
        paddingTop:20,
        paddingBottom:10,
        width:400,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        marginBottom:10,
        textAlign:'center'
    },
    button:{
        width:250,
        height:70,
        backgroundColor:'#026efd',
        marginTop:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginLeft:80
    }
})

