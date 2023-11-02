import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/authScreens/login";
import SignUp from "../screen/authScreens/signUp";


const AuthScreen = () => {
    const AuthStack = createNativeStackNavigator();
    return (
        <AuthStack.Navigator initialRouteName="LOGIN">
            <AuthStack.Screen name="LOGIN" component={Login} />
            <AuthStack.Screen name="SIGN_UP" component={SignUp}/>
        </AuthStack.Navigator>
    )
}
export default AuthScreen;