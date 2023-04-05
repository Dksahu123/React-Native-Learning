import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import react, { useState, useEffect } from "react";
import { firebase } from "./Config";

import { StyleSheet, Text, View } from "react-native";
import Login from "./src/Login";
import Registration from "./src/Registration";
import Header from "./components/Header";
import Dashboard from "./src/Dashboard";
const Stack = createStackNavigator();
 function App() {
  const [initalizing, setInitalizing] = useState(true);

  const [user, setUser] = useState("");

  function onAuthchange(user) {
    setUser(user);
    if (initalizing) setInitalizing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthchange);
    return subscriber;
  }, []);
  if (initalizing) return null;
  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
        options={{
          headerTitle:()=><Header name="NXG SOLUTIONS" />,
          headerStyle:{
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            shadowColor:'#000',
            elevation:25,
            backgroundColor:'#00e4d0'
          }
          
        }}
        />
        <Stack.Screen name="Registration" component={Registration}
        options={{
          headerTitle:()=><Header name="NXG SOLUTIONS" />,
          headerStyle:{
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            shadowColor:'#000',
            elevation:25,
            backgroundColor:'#00e4d0'
          }
          
        }}
        />
        
      </Stack.Navigator>
    );
  }
  return(
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard}
        options={{
          headerTitle:()=><Header name="Dashboard" />,
          headerStyle:{
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            shadowColor:'#000',
            elevation:25,
            backgroundColor:'#00e4d0'
          }
          
        }}
        />
    </Stack.Navigator>
  );

}
export default ()=>
{
return(
  <NavigationContainer>
    <App />
  </NavigationContainer>
)
}