import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screen/mainScreens/home";




const HomeNavigation = () => {

    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HOME" component={Home}/>
        </HomeStack.Navigator>
        )
}

export default HomeNavigation