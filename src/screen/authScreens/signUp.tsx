import React, { useEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./authStyles";
import { PRIMARY_COLOR } from "../../service/config";


const SignUp = (props: any) => {

    useEffect(() => {

    }, [])

    const gotoLogin = () => {
        props.navigation.navigate('LOGIN')
    }

    return (
        <SafeAreaView>
            <ScrollView automaticallyAdjustKeyboardInsets={true}>
                <Image source={require('../../assests/signup.png')} />
                <Text style={{ color: PRIMARY_COLOR, fontSize: 25, textAlign: "center", fontWeight: "800", marginBottom: 30 }}>
                    <Text style={{ color: "#000", fontSize: 35 }}>Create</Text> an account</Text>
                <View style={Styles.contentContainer}>
                    <Text style={Styles.userNameText}>
                        UserName
                    </Text>
                    <TextInput style={Styles.usrNameInput} />
                    <Text style={Styles.emailText}>
                        Email
                    </Text>
                    <TextInput style={Styles.emailInput} />
                    <Text style={Styles.passText}>
                        Password
                    </Text>
                    <TextInput style={Styles.passInput} />

                    <TouchableOpacity style={Styles.loginTextCont}>
                        <Text style={{ color: "#FFF", fontSize: 15, fontWeight: "600", letterSpacing: 0.3 }}>Signup</Text>
                    </TouchableOpacity>
                    <View style={Styles.createAccContainer}>
                        <Text style={{ textAlign: "center", fontSize: 16 }}>Already have an account</Text>
                        <TouchableOpacity style={{ marginLeft: 6 }} onPress={() => gotoLogin()}>
                            <Text style={Styles.signupText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp