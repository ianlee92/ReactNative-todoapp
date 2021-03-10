import React from 'react'
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'

const InputComponent = ({
    EnteredGoal,
    goalInputHandler,
    addGoalHandler,
    ModalVisible,
    closeModal
}) => {
    return <Modal animationType="slide" visible={ModalVisible}>
        <View style={styles.textInputContainer}>
            <TextInput value={EnteredGoal.text} onChangeText={goalInputHandler} style={styles.textInput} placeholder="목표를 입력하세요!" />
            <Button onPress={addGoalHandler} title="목표 추가" />
            <View style={styles.closeButtonStyle}>
            <Button onPress={closeModal} title={"닫기"} color="red" />
            </View>
        </View>
    </Modal>
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
    textInputContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
      flex: 1
    },
    closeButtonStyle: {
      position: 'absolute',
      top: 60
    }
});

export default InputComponent