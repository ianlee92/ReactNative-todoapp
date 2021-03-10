import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

const InputComponent = ({
    EnteredGoal,
    goalInputHandler,
    addGoalHandler
}) => {
    return <View style={styles.row}>
        <TextInput value={EnteredGoal.text} onChangeText={goalInputHandler} style={styles.textInput} placeholder="Course Goal!" />
        <Button onPress={addGoalHandler} title="ADD" />
    </View>
}

const styles = StyleSheet.create({
    textInput: {
      backgroundColor: '#70a1ff',
      width: '80%',
      color: 'black',
      paddingVertical: 10,
      paddingHorizontal: 7,
      borderRadius: 7
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30
    }
});

export default InputComponent