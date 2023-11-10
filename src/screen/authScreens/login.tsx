import React, { useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
import { Styles } from "./authStyles";


const Login = (props:any) => {

    useEffect(() => {

    }, [])

    const navigateSignup=()=>{
        props.navigation.navigate('SIGN_UP')
    }

    return (
        <SafeAreaView>
            <ScrollView automaticallyAdjustKeyboardInsets={true}>
            <Image source={require('../../assests/login.png')} style={{ top: "6%" }} />
            <View style={Styles.Container}>
                {/* <Text style={{fontSize: 35,fontWeight:700,color:"#000"}}><Text style={{color:"purple",fontSize:38}}>L</Text>ogin</Text> */}
                <Text style={Styles.helloThere}>Hello there !</Text>
                <Text style={Styles.welcomeText}><Text style={{ color: "purple", fontSize: 41 }}>Welcome </Text>back</Text>
                
                <TextInput style={Styles.mobileInput} placeholder="Mobile Number" />
                
                <TouchableOpacity style={Styles.loginTextCont}>
                    <Text style={{ color: "#FFF" }}>Login</Text>
                </TouchableOpacity>
                <View style={Styles.createAccContainer}>
                    <Text style={{ textAlign: "center" }}>Create New Account</Text>
                    <TouchableOpacity style={{ marginLeft: 6 }} onPress={()=> navigateSignup()}>
                        <Text style={Styles.signupText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            </SafeAreaView>
    )
}

export default Login