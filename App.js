import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.textInput} placeholder="Course Goal!" />
        <Button title="ADD" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
});
