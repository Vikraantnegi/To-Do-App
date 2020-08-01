import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './src/MainScreen';
import firebase from 'firebase';
import Login from './src/Login';

export default function App() {

  const [User, setUser] = useState(false)

  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: "AIzaSyAmgB9t8odCv5MJP-WymqddR-Eg-VGjowo",
      authDomain: "dev-vsn-scheduler.firebaseapp.com",
      databaseURL: "https://dev-vsn-scheduler.firebaseio.com",
      projectId: "dev-vsn-scheduler",
      storageBucket: "dev-vsn-scheduler.appspot.com",
      messagingSenderId: "459473598584",
      appId: "1:459473598584:web:edf1719da949fbe623158d",
      measurementId: "G-WD3NVXRTPT"
    };
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if(user === null){
      setUser(false)
    }
    else {
      setUser(true)
    } 
  })
  
  if(User){
    return (
      <View style={styles.container}>
        <MainScreen/>
      </View>
    );
  }
  else{
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'rgba(255,255,0,0.5)',
  },
});
