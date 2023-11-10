import React, { useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView } from "react-native";


const Login=()=>{

    useEffect(()=>{

    },[])

return (
    <KeyboardAvoidingView>
        <Image source={require('../../assests/login.png')} style={{ top: "6%" }} />
        <View style={{ marginHorizontal: 15 }}>
            {/* <Text style={{fontSize: 35,fontWeight:700,color:"#000"}}><Text style={{color:"purple",fontSize:38}}>L</Text>ogin</Text> */}
            <Text style={{ fontSize: 35, fontWeight: 700, marginTop: "15%" }}>Hello there !</Text>
            <Text style={{ fontSize: 35, fontWeight: 700 }}><Text style={{ color: "purple", fontSize: 41 }}>Welcome </Text>back</Text>
            <TextInput style={{ borderBottomWidth: 1, marginTop: "40%", borderBottomColor: "#000" }} placeholder="Mobile Number" />
            <TouchableOpacity style={{ backgroundColor: "purple", padding: 10, marginTop: "10%", alignItems: "center", borderRadius: 10 }}>
                <Text style={{ color: "#FFF" }}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
                <Text style={{ textAlign: "center" }}>Create New Account</Text>
                <TouchableOpacity style={{ marginLeft: 6 }}>
                    <Text style={{ color: "purple", textDecorationLine: "underline" }}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
)
}

export default Login