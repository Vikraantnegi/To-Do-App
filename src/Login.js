import React, { useState } from 'react';
import { TouchableHighlight, Button, Text, View, StyleSheet, Image, TextInput} from 'react-native';
import firebase from 'firebase';

const Login = () => {

    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')

    return(
        <View style={styles.ViewStyle}>
            <Text style={styles.textProperties}>Hey Welcome, Login if you are an existing user.</Text>
            <Text style={styles.textProperties}>And If you are a new user, Kindly Register!.</Text>
            <Image source={require('../img/Notepad_icon.svg.png')} style={styles.ImageStyle}/>
            <Text style={styles.textProperties1}> Email: </Text>
            <TextInput 
                autoCapitalize="none" 
                autoCorrect={false}
                style={styles.textInput}
                value={email}
                onChangeText = {(currentText) => {setemail(currentText)}}
                />
            <Text style={styles.textProperties1}> Password: </Text>
            <TextInput 
                autoCapitalize="none" 
                autoCorrect={false}
                style={styles.textInput}
                secureTextEntry={true}
                value={password}
                onChangeText = {(currentText) => {setpassword(currentText)}}
                />
            <TouchableHighlight
                style ={{
                    alignSelf : 'center',
                    width:200,
                    margin:10,
                }}> 
                <Button title = 'Login!'
                    onPress={() => {
                        firebase.auth().signInWithEmailAndPassword(email, password)
                            .then(() => {})
                            .catch(() => {})
                    }}
                    color= "red" />
            </TouchableHighlight>
            <TouchableHighlight
                style ={{
                    alignSelf : 'center',
                    width:200,
                }}> 
                <Button title = 'SignUp!'
                    onPress={() => {
                        firebase.auth().createUserWithEmailAndPassword(email, password)
                            .then(()=>{
                                setemail('')
                                setpassword('')
                            })
                            .catch(()=>{
                                console.log('Some error occured')
                            })
                    }}
                    color= "red" />
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({  
  ViewStyle : {
      margin : 10,
      marginTop : 100
  },
  textProperties : {
      alignSelf : 'center',
      fontSize : 16
  },
  textProperties1 : {
    fontSize : 20
  },
  ImageStyle : {
      marginBottom : 20,
      marginTop : 20,
      resizeMode : 'cover',
      height : 200,
      width : 200,
      alignSelf : 'center'
  },
  textInput : {
      width : 300,
      margin : 10,
      padding : 3,
      borderWidth : 5,
      alignSelf : 'center',
      padding :10
  }
});

export default Login;