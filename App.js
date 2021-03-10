import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {

  const [EnteredGoal, setEnteredGoal] = useState('')
  const [CourseGoals, setCourseGoals] = useState([])
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, EnteredGoal])
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput value={EnteredGoal} onChangeText={goalInputHandler} style={styles.textInput} placeholder="Course Goal!" />
        <Button onPress={addGoalHandler} title="ADD" />
      </View>
      <View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 50
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
