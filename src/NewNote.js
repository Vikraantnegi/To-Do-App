import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, TouchableHighlight} from 'react-native';
import firebase from 'firebase';

const CreateNote = (props) => {
    const [newNote, setNewNote] = useState('')

    return  (
            <View>
                <TextInput 
                    autoCapitalize="none" 
                    multiline={true} 
                    autoCorrect={false}
                    value = {newNote}
                    onChangeText={(currentText) => {
                        setNewNote(currentText)
                    }}
                    style={styles.textInput} 
                />
                <TouchableHighlight 
                style ={{
                    alignSelf : 'center',
                    width:200,
                }}>
                <Button 
                    title = {'Create Note'}
                    onPress={() => {
                        if(newNote !== ''){
                            const UserId = firebase.auth().currentUser.uid
                            const path = `/users/{UserId}/`
                            firebase.database()
                            .ref(path).push({
                                'date' : new Date().toDateString(),
                                'text' : newNote
                            })
                            setNewNote('') 
                        }
                    }}
                    color= "red"
                />
                </TouchableHighlight>
            </View>
    );
}

const styles = StyleSheet.create({
    textInput : {
        marginTop : 10,
        marginBottom : 10,
        borderWidth : 1,
        backgroundColor : "white",
        width : "100%",
        fontSize : 18,
        padding : 20
    },
    ButtonStyle : {       
         
    }
});

export default CreateNote;