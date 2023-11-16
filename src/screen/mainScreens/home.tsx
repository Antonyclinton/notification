import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";


const Home=(props:any)=>{

    useEffect(()=>{

    },[])

return (
    <View>
        <TouchableOpacity onPress={()=> props.navigation.navigate('LOCATION')}>
            <Text>Map Location</Text>
        </TouchableOpacity>
        <Text>Welcome to Home Screen</Text>
    </View>
)
}

export default Home