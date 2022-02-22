import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { AddTodo } from './src/components/AddTodo';
import { Navbar } from './src/components/Navbar';
import { Todo } from './src/components/Todo';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'test1' },
    { id: 2, title: 'test2' },
    { id: 3, title: 'test3' },
    { id: 4, title: 'test4' },
    { id: 5, title: 'test5' },
    { id: 6, title: 'test6' },
    { id: 7, title: 'test7' },
    { id: 8, title: 'test8' },
    { id: 9, title: 'test9' },
    { id: 10, title: 'test10' },
    { id: 11, title: 'test11' },
    { id: 12, title: 'test12' },
    { id: 13, title: 'test13' },
    { id: 14, title: 'test14' },
    { id: 15, title: 'test15' },
  ]);

  // useEffect(() => {
  //   console.log(todos)
  // })

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
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Todo todo={item} />}
        />
        {/* <View>
          {todos.map((todo) => <Todo key={todo.id} todo={todo} /> )}
        </View> */}
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
