import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput} from 'react-native'

const { width, height } = Dimensions.get("window");

const ToDo = (props) => {
    return <View style={styles.container}>
        <View style={styles.column}>
            <TouchableOpacity onPress={props.toggleComplete}>
                <View style={[styles.circle,
                    props.Completed ? styles.completedCircle : styles.uncompletedCircle]}
                    ></View>
                <View><Text style={
                    props.Completed ? styles.completedCheck : styles.uncompletedCheck}
                    >✓</Text></View>
            </TouchableOpacity>
            {props.Edited ? (<TextInput 
                            style={[styles.text, styles.input, props.Completed ? styles.completedText : styles.uncompletedText]}
                            value={props.Goal} 
                            multiline={true}
                            onChangeText={props.setDoValue}
                            returnKeyType={"done"}
                            onBlur={props.finishEditing}
                        />) : (<Text style={[styles.text,
            props.Completed ? styles.completedText : styles.uncompletedText]}>{props.Goal}</Text>)}
        </View>

        {props.Edited ? (<View style={styles.actions}>
            <TouchableOpacity onPressOut={props.finishEditing}>
                <View style={styles.actionContainer}>
                    <Text style={styles.actionText}>✅</Text>
                </View>
            </TouchableOpacity>
        </View>) : (<View style={styles.actions}>
            <TouchableOpacity onPressOut={props.startEditing}>
                <View style={styles.actionContainer}>
                    <Text style={styles.actionText}>✏️</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.actions}>
            <TouchableOpacity>
                <View style={styles.actionContainer}>
                    <Text style={styles.actionText}>❌</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>)}
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: width - 70,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20,
        marginRight: 40
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 25,
        borderWidth: 3,
        marginRight: 15
    },
    uncompletedCircle: {
        borderColor: "#bbb",
        borderWidth: 1
    },
    completedCircle: {
        borderColor: "#ffeaa7",
        borderRadius: 25,
        borderWidth: 15
    },
    uncompletedCheck: {
        display: 'none'
    },
    completedCheck: {
        marginTop: -27,
        marginLeft: 6,
        fontSize: 21
    },
    uncompletedText: {
        color: "#353839",
    },
    completedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        width: width / 2,
        justifyContent: "space-between"
    },
    actions: {
        flexDirection: "row"
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    input: {
        marginVertical:15,
        width: width / 2,
        paddingBottom: 5
    }
});

export default ToDo
