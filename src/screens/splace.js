import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native'

const splace = ({navigation}) => {

useEffect(()=>
{
    setTimeout(()=>
    {
        navigation.navigate('mainscr')
    },3000)

},[])

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
 <Image
        source={require("../Images/news.png")}
        style={{
          width: "60%",
          height: 180,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 30,
        }}
      />



      <Text style={{fontSize:30,fontWeight:'700',marginTop:10,color:'blue'}}>MyNews App</Text>
    </View>
  )
}

export default splace