import React, { useEffect, useRef, useState } from "react";
import messaging from '@react-native-firebase/messaging';
import {Alert, Button, PermissionsAndroid, Text, TouchableOpacity, View} from 'react-native';
import database from '@react-native-firebase/database';
import uuid from 'react-native-uuid';
import SocketIOClient from 'socket.io-client'
import { RTCPeerConnection } from "react-native-webrtc";

const App=()=>{
  const [screens,setScreens] = useState('VIDEO_CALL')
  const state =useRef("hai")
  const peerConnection = useRef(
    new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
        {
          urls: 'stun:stun1.l.google.com:19302',
        },
        {
          urls: 'stun:stun2.l.google.com:19302',
        },
      ],
    }),
  );
  let initial
  let callerId = "12345"
  const socket = SocketIOClient('http://192.168.29.4:3500', {
    query: {
      callerId,
    },
  });
  useEffect(()=>{
  
  socket.on('newCall',(data)=>{
    console.log(data);
  })
  
    // FireBase Push Notification Start

    // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
    // requestUserPermission()
    // messaging().getToken().then((token)=> console.log(token))
    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });

    // return unsubscribe;

    // Firebase push notification End


})

const requestUserPermission=async()=> {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const getUser=()=>{

}

const createUser =()=>{
  // database().ref().child('users').orderByChild('name').equalTo('clinton').once('value').then((snap)=> console.log(snap.exists()))
  // const id = uuid.v4()
  // database()
  // .ref('/users/'+id)
  // .set({
  //   id: id,
  //   name: 'Clinton',
  //   age: 26,
  // })
  // .then(() => {
  //   getUser()
  // });
}


const loginUser=()=>{

}

initial = state.current
return(
  <View>
    {screens == "VIDEO_CALL"? <TouchableOpacity onPress={()=> state.current = "bye"}>{console.log("render")
  }
<Text style={{fontSize:20,marginLeft:20}}>{state.current}</Text>
    </TouchableOpacity>:
  <View>
    <Text>Register User</Text>
    <Button title="Register" onPress={()=> createUser()}></Button>

    <Text>
      Login User
    </Text>
    <Button title="Login" onPress={()=> console.log()
    }></Button>
  </View>
}
  </View>
)
}

export default App