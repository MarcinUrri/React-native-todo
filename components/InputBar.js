import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
  const {addNewTodo, todoInput} = props
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input} 
        onChangeText={todoInput => props.textChange(todoInput)}
        value={todoInput}
        placeholder='Add your todos...'
        />
      <TouchableOpacity style={styles.addButton} onPress={addNewTodo}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: .1
  },
  input: {
    backgroundColor: '#F3F3F3',
    flex: 1,
    fontSize: 18,
    height: 35,
    padding: 10
  },
  addButton: {
    width: 100,
    backgroundColor: '#FFCE00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#171717',
    fontSize: 18,
    fontWeight: '700'
  }
})
export default InputBar