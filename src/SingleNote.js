import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const SingleNote = (props) => {
    return (
        <View  
            backgroundColor={randomBackgroundColor()} 
            style={styles.textViewProperties}>
            <Text style={styles.textProperties1}>{props.date.toDateString()}</Text>
            <Text style={styles.textProperties}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textViewProperties : {
        height: 150,
        width : 160,
        margin : 10,
        padding : 10,
        borderRadius : 15,
    },    
    textProperties: {
        fontSize : 22,
    },
    textProperties1: {
        fontSize : 12,
    },
});



const randomBackgroundColor = () => {
    var red = Math.floor(Math.random()*255)
    var green = Math.floor(Math.random()*255)
    var blue = Math.floor(Math.random()*255)
    const alpha = 0.7;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

export default SingleNote;