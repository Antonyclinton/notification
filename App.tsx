import React, { useEffect, useRef, useState } from "react";
import messaging from '@react-native-firebase/messaging';
import {Alert, Button, PermissionsAndroid, Text, TouchableOpacity, View} from 'react-native';
import database from '@react-native-firebase/database';
import uuid from 'react-native-uuid';
import SocketIOClient from 'socket.io-client'
import { RTCPeerConnection } from "react-native-webrtc";
import { firebaseConfig, requestUserPermission } from "./src/firebaseConfig";
import AppNavigation from "./src/Navigation";

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
    messaging()
    .getInitialNotification()
    .then(async (remoteMessage) => {
      //remoteMessage --> is now filled 
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    
    initializePNnotification();
  // socket.on('newCall',(data)=>{
  //   console.log(data);
  // })
})

 const initializePNnotification=async()=>{
  let isGranted = await requestUserPermission();
  if(isGranted) firebaseConfig();
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

initial = state.current
return <AppNavigation />
}

export default App