import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import uuid from 'react-uuid';
import GoalItem from './components/goalItem';
import InputComponent from './components/InputComponent';

export default function App() {

  const [EnteredGoal, setEnteredGoal] = useState({
    key: '',
    text: ''
  })
  const [CourseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal({
      key: '',
      text: enteredText
    })
  }

  const addGoalHandler = () => {
    const enteredGoalWithKey = {
      key: uuid(),
      text: EnteredGoal.text
    }
    setCourseGoals(currentGoals => [...currentGoals, enteredGoalWithKey])
  }

  return (
    <View style={styles.container}>
      <InputComponent 
        EnteredGoal={EnteredGoal}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      <FlatList data={CourseGoals} renderItem={(data) => <GoalItem text={data.item.text} />} />
      {/* ScrollView는 한번에 렌더를 처리하므로 데이터 처리속도가 스크롤 속도를 따라가지
          못하는 경우가 있음. 즉 적은 양의 데이터를 출력할때는 용이하지만 데이터 양이 많을 때에는
          화면에 보여주는 부분만 렌더링하는 FlatList을 사용한다.
      <ScrollView>
        {CourseGoals.map((goal, index) => <View style={styles.goalItem}><Text key={index} style={styles.goalText}>{goal}</Text></View>)}
      </ScrollView>
      */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
