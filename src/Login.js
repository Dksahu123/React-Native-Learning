import { View, Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {useNavigation } from '@react-navigation/native'
import { firebase } from '../Config'



const Login = () => {
    const navigation=useNavigation()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

   const loginUser=async (email,password)=>
  {
    try{
        await firebase.auth().signInWithEmailAndPassword(email,password)
    }catch(error){
        alert(error.message)
    }
  }
  return(
    <View style={styles.container}>
        <Text style={{fontWeight:'bold',fontSize:26,color:'#008b8b'}}>
LogIn
        </Text>
        <View style={{marginTop:40}}>

            <TextInput
            style={styles.textinput}
            placeholder='Enter Email'
            value={email}
            onChangeText={(email)=>setEmail(email)}
            autoCapitalize='none'
            autoCorrect={false}
            />
             <TextInput
            style={styles.textinput}
            placeholder='Enter Password'
            value={password}
            onChangeText={(password)=>setPassword(password)}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            />

        </View>

        <TouchableOpacity onPress={()=>loginUser(email,password)}
        style={styles.button}>
            <Text style={{fontWeight:'bold',fontSize:22}}>
                Login
            </Text>


        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Registration')}
        style={{marginTop:20}}>
            <Text style={{fontWeight:'bold',fontSize:16}}>
                Don't have an account? Regiter
            </Text>


        </TouchableOpacity>
    </View>
  )
}

export default Login;

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
        borderRadius:50
    }
})

