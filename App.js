import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, TextInput, ScrollView, StyleSheet, View, Dimensions, Platform } from 'react-native';
import ToDo from './ToDo';
import AppLoading from 'expo-app-loading';

const { height, width } = Dimensions.get("window");

export default function App() {

  const [NewToDo, setNewToDo] = useState("")
  const [Completed, setCompleted] = useState(false)
  const [Edited, setEdited] = useState(false)
  const [Goal, setGoal] = useState("")
  const [DoValue, setDoValue] = useState("")
  const [LoadedToDo, setLoadedToDo] = useState(false)

  const toggleComplete = () => {
    setCompleted(!Completed)
  }

  const startEditing = () => {
    setEdited(true),
    setDoValue(Goal)
  }

  const finishEditing = () => {
    setEdited(false)
  }

  const controllNewToDo = () => {
    setNewToDo(Goal)
  }

  const loadToDo = () => {
    setLoadedToDo(true)
  }

  useEffect(() => {
    loadToDo()
  }, [])

  const addToDo = () => {
    if(newToDo !== ""){
      setNewToDo("")
    }
  }


  if(!LoadedToDo) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>오늘의 목표 😎</Text>
      <View style={styles.card}>
        <TextInput 
          style={styles.input} 
          placeholder={"You can do it!"} 
          value={NewToDo} 
          onChangeText={controllNewToDo} 
          placeholderTextColor={"#999"}
          returnKeyType={"done"}
          autoCorrect={false}
          onSubmitEditing={addToDo}
        />
        <ScrollView contentContainerStyle={styles.toDos}>
          <ToDo 
          finishEditing={finishEditing} 
          Completed={Completed} 
          Edited={Edited}
          DoValue={DoValue}
          Goal={"아무것도 안하기"}
          startEditing={startEditing} 
          toggleComplete={toggleComplete}
          setDoValue={setDoValue}/>
        </ScrollView>
      </View>
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
