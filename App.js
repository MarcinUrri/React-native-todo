import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import InputBar from './components/InputBar'
import TodoItem from './components/TodoItem'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoInput: '',
      editTodoInput: '',
      todos: [
        { 
          id: 0, 
          title: 'Learn react native', 
          done: false,
          edit: false,
        },
        { 
          id: 1, 
          title: 'Learn Node js', 
          done: true,
          edit: false
        }
      ]
    }
  }

  addNewTodo() {
    const todos = [...this.state.todos]
    todos.push({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false
    });

    this.setState({ todos, todoInput: '' })
  }

  toggleDone (item) {
    const todos = [...this.state.todos]

    todos[item.id].done = !todos[item.id].done

    this.setState({ todos })
  }

  editTodo (item) {
    const todos = [...this.state.todos]
    console.log(item)
    if(item.input) {
      this.setState({ editTodoInput: item.title })
    }
    if(item.operation === 'save') {
      todos[item.todoItem.id].edit = false
      todos[item.todoItem.id].title = this.state.editTodoInput
    } else if (item.operation === 'edit'){
      todos[item.todoItem.id].edit = true
      this.setState({ editTodoInput: item.todoItem.title })
    }
    this.setState({ todos })
  }

  removeTodo (item) {
    let todos = [...this.state.todos]
    todos = todos.filter(todo => todo.id !== item.id)
    this.setState({ todos })
  }

  render() {
    const statusbar = (Platform.OS === 'ios') ? <View style={styles.statusbar}></View> : null
    const newTodo = this.state.todoInput !== '' ? <Text style={styles.newTodo}>{this.state.todoInput}</Text> : null
    return (
      <View style={styles.container}>
        <View>
        {statusbar}
          <Header title="Urri's todo" />
          <InputBar 
            textChange={todoInput => this.setState({ todoInput })} 
            addNewTodo={() => this.addNewTodo()}
            todoInput={this.state.todoInput}
          />
          {newTodo}
          <View style={styles.list}>
            <FlatList 
              data={this.state.todos}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString()} 
              renderItem={ ({item, index}) => {
                return (
                  <TodoItem 
                    todoItem={item} 
                    toggleDone={() => this.toggleDone(item)} 
                    removeTodo={() => this.removeTodo(item)} 
                    editTodo={(itemToEdit) => this.editTodo(itemToEdit)}
                    editTodoInput={this.state.editTodoInput}
                    textChange={(title) => this.editTodo({title, input: 'input'})}
                  />
                )
              }}
            />
          </View>
        </View>
        <Footer title='App created by Urri'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 35
  },
  newTodo: {
    padding: 10,
    backgroundColor: '#00C932'
  }
});
