import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthScreen from "./authScreen";
import HomeNavigation from "./mainScreen";




const AppNavigation=()=>{

return <NavigationContainer>
    {true?<AuthScreen />: <HomeNavigation/>}
</NavigationContainer>
}

export default AppNavigation