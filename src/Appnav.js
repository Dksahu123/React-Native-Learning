import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import splace from "./screens/splace";
import Mainscreen from "./screens/Mainscreen";
import Newsdetails from "./screens/Newsdetails";
import CategoriesNews from "./screens/CategoriesNews";

const stack = createNativeStackNavigator();

const Appnav = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="splace"
          component={splace}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="mainscr"
          component={Mainscreen}
          options={{ headerShown: false }}
        />
         <stack.Screen
          name="Newsdetails"
          component={Newsdetails}
          options={{ headerShown: false }}
        />
         <stack.Screen
          name="CategoriesNews"
          component={CategoriesNews}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnav;
