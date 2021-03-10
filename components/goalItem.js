import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

const GoalItem = (props) => {
    return <TouchableOpacity onPress={props.deleteElement}>
        <View style={styles.goalItem}><Text style={styles.goalText}>{props.text}</Text></View>
    </TouchableOpacity>
}

const styles =  StyleSheet.create({
    goalItem: {
        backgroundColor: '#7bed9f',
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 7,
        borderRadius: 7,
    },
    goalText: {
    color: 'black'
    }
})

export default GoalItem