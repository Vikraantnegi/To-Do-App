import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, Image, TextInput, TouchableHighlight, Button} from 'react-native';
import SingleNote from './SingleNote';
import CreateNote from './NewNote';
import firebase from 'firebase';
import _ from 'lodash';

const MainScreen = () => {

    const [data, setData] = useState([])

    const UserId = firebase.auth().currentUser.uid

    useEffect(() => {firebase.database()
            .ref(`/users/{UserId}/`)
            .on('value', (newData) => {
                const newList = _.map(newData.val(), (value, key) => {
                    return {...value};
                })
                setData(newList.reverse())
            })
    }, [])
            

    const addNewNote = (text) => {
        if(text.length > 0){
            setData([ {"date" : new Date(), "text" : text}, ...data])
        }
    }
    return (
        <View style={styles.viewProperties}>
                <Image source = {require('../img/notebook_write_watch_pen_67636_300x168.jpg')} style={styles.ImageStyle}/>
                <CreateNote onCreate = {
                    (text) => addNewNote(text) 
                }
                />
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    style={styles.listProperties}
                    data={data}
                    keyExtractor={(item, index) =>{
                        return index.toString()
                    }}
                    numColumns={2}
                    renderItem = {({item}) => {
                        return <SingleNote date = {item.date} text = {item.text} />
                    }}
                />
            <TouchableHighlight
                style ={{
                    alignSelf : 'center',
                    width:100,
                    marginTop : 10
                }}> 
                <Button title = 'LogOut!'
                    onPress={() => {
                        firebase.auth().signOut()
                    }}
                    color = "red" />
            </TouchableHighlight>
        </View>
    );        
}

const styles = StyleSheet.create({
    viewProperties: {
        paddingTop : 50,
        paddingBottom : 50,
        paddingLeft : 10,
        paddingRight : 10,
    },
    listProperties : {
        backgroundColor : 'rgba(255,165,0,0.5)',
        height : 'auto',
        borderRadius : 20,
        marginTop : 20,
        padding : 5
    },
    textInput : {
        marginTop : 10,
        borderWidth : 1,
        height : "10%",
        width : "100%"
    },
    ImageStyle : {
        height : '20%',
        width : '100%',
        resizeMode : 'cover',
        borderRadius : 15,
    }
});

export default MainScreen;
