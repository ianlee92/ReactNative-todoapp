import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [OutputText, setOutputText] = useState("Hi there! 👀")
  function buttonTapped(){
    setOutputText("🎉 Welcome to React Native World!")
  }

  return (
    <View style={styles.container}>
      <Text>{OutputText}</Text>
      <Button title="Click" onPress={buttonTapped} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
