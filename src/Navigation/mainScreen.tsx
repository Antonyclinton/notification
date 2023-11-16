import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screen/mainScreens/home";
import DrawerNavigator from "./drawer";
import Location from "../screen/mainScreens/location";




const HomeNavigation = () => {

    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName="HOME" screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HOME" component={DrawerNavigator} />
            <HomeStack.Screen name="LOCATION" component={Location} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigation