import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../service/config";

export const Styles = StyleSheet.create({
    Container:{
        marginHorizontal: 15
    },
    helloThere:{ 
        fontSize: 35, 
        fontWeight: "700", 
        marginTop: "15%",
    },
    welcomeText:{ 
        fontSize: 35, 
        fontWeight: "700" 
    },
    mobileInput:{ 
        borderBottomWidth: 1, 
        marginTop: "40%", 
        borderBottomColor: "#000",
        fontSize: 15 
    },
    loginTextCont:{ 
        backgroundColor: PRIMARY_COLOR, 
        padding: 10, 
        marginTop: "10%", 
        alignItems: "center", 
        borderRadius: 10
    },
    createAccContainer:{ 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center", 
        marginTop: "5%" 
    },
    signupText:{ 
        color: PRIMARY_COLOR, 
        textDecorationLine: "underline",
    },
    userNameText:{
        fontSize: 18,
        fontWeight: "600"
    },
    usrNameInput:{
        borderBottomWidth: 1,
        marginBottom: "7%",
        width:"90%",
    },
    emailText:{
        fontSize: 18,
        fontWeight: "600"
    },
    emailInput:{
        borderBottomWidth: 1,
        marginBottom: "7%",
        width:"90%"
    },
    passText:{
        fontSize: 18,
        fontWeight: "600"
    },
    passInput:{
        borderBottomWidth: 1,
        width:"90%"
    },
    contentContainer:{
        paddingHorizontal:15,
    },
})