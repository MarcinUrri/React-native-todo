import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, TextInput } from 'react-native'

export default class TodoItem extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    const todoItem = this.props.todoItem
    const editTodoInput = this.props.editTodoInput

    return (
      <TouchableOpacity 
        style={styles.todoItem} 
        onPress={() => this.props.toggleDone()}
      >
        {todoItem.edit ? 
          <TextInput 
            onChangeText={editTodoInput => this.props.textChange(editTodoInput)}
            value={editTodoInput}
            style={styles.input}
          />
          :
          <Text 
            style={(todoItem.done) ? { color: '#AAA'} : { color : '#313131'}}  
            style={styles.text}>
            { todoItem.title }
          </Text>
        }
        {
        <Button
          title='Remove'
          color={ (todoItem.done) ? 'rgba(200, 0, 0, 0.5)' : 'rgba(255, 0, 0, 1)' }
          onPress={() => this.props.removeTodo()}
        />}
        {todoItem.edit ? 
          <Button
          title='Save'
          color={ (todoItem.done) ? 'rgba(74, 141, 247, 0.5)' : 'rgba(74, 141, 247, 1)' }
          onPress={() => this.props.editTodo({todoItem, operation: 'save'})}
        /> :
        <Button
        title='Edit'
        color={ (todoItem.done) ? 'rgba(74, 141, 247, 0.5)' : 'rgba(74, 141, 247, 1)' }
        onPress={() => this.props.editTodo({todoItem, operation: 'edit'})}
      /> }
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  todoItem: {
    width: '100%',
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15
  },
  text: {
    flex: 2
  },
  input: {
    backgroundColor: '#F3F3F3',
    flex: 1,
    fontSize: 18,
    height: 35
  }
})