import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, TextInput, ScrollView, StyleSheet, View, FlatList, Button, Dimensions, Platform } from 'react-native';
import uuid from 'react-uuid';
import GoalItem from './components/goalItem';
import InputComponent from './components/InputComponent';
import ToDo from './ToDo';

const { height, width } = Dimensions.get("window");

export default function App() {

  const [EnteredGoal, setEnteredGoal] = useState({
    key: '',
    text: ''
  })
  const [CourseGoals, setCourseGoals] = useState([])
  const [ModalVisible, setModalVisible] = useState(false)
  const [NewToDo, setNewToDo] = useState("")
  const [Completed, setCompleted] = useState(false)
  const [Edited, setEdited] = useState(false)
  const [Goal, setGoal] = useState("")
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

  const deleteElement = (goalKey) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => {
        return goalKey !== goal.key
        // return false => 해당요소를 제거하고 새로운 배열
        // 존재하는 Key값과 눌려진 Key값이 서로 일치하면 false 다르면 true
      })
    })
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const toggleComplete = () => {
    setCompleted(!Completed)
  }

  const startEditing = () => {
    setEdited(true)
  }

  const finishEditing = () => {
    setEdited(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>오늘의 목표 😎</Text>
      <View style={styles.card}>
        <TextInput 
          style={styles.input} 
          placeholder={"You can do it!"} 
          value={NewToDo} 
          onChangeText={setNewToDo} 
          placeholderTextColor={"#999"}
          returnKeyType={"done"}
          autoCorrect={false}
        />
        <ScrollView contentContainerStyle={styles.toDos}>
          <ToDo 
          finishEditing={finishEditing} 
          Completed={Completed} 
          Edited={Edited}
          Goal={"아무것도 안하기"}
          startEditing={startEditing} 
          toggleComplete={toggleComplete}/>
        </ScrollView>
      </View>
      {/* <Button onPress={openModal} title="새로운 목표" /> */}
      <InputComponent 
        EnteredGoal={EnteredGoal}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        ModalVisible={ModalVisible}
        closeModal={closeModal}
      />
      
      <FlatList data={CourseGoals} renderItem={(data) => <GoalItem deleteElement={deleteElement.bind(this, data.item.key)} text={data.item.text} />} />
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
    flex: 1,
    backgroundColor: "#f7b731",
    padding: 50,
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "400",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
          height: 30,
          width:0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  },
  toDos: {
    alignItems: "center"
  }
});
