import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AddTodo } from './src/components/AddTodo';
import { Navbar } from './src/components/Navbar';
import { Todo } from './src/components/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos(prev => [
      ...prev, {
        id: Date.now().toString(),
        title
        }
    ])
  }

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map((todo) => <Todo key={todo.id} todo={todo} /> )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  text: { 

  }
});
