import { NavigationContainer } from "@react-navigation/native";
import React, { createContext } from "react";
import AuthScreen from "./authScreen";
import HomeNavigation from "./mainScreen";


const AppNavigation = () => {
    const Context = createContext(null)
    return <NavigationContainer>
        {
            false ?
                <AuthScreen />
                :
                <HomeNavigation />
        }
    </NavigationContainer>
}

export default AppNavigation