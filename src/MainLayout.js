import React, { useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import { Navbar } from './components/Navbar';
import { ScreenContext } from './context/screen/screenContext';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { THEME } from './theme';


export const MainLayout = () => {
  const {todoId} = useContext(ScreenContext);

  // const removeTodo = (id) => {
  //   const todo = todos.find((item) => item.id === id);
  //   Alert.alert('Delete task', `Are you sure you want to delete "${todo.title}" ?`, [
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     {
  //       text: 'DELETE',
  //       style: 'destructive',
  //       cancelable: true,
  //       onPress: () => {
  //         setTodoId(null);
  //         setTodos((prev) => prev.filter((todo) => todo.id !== id));
  //       },
  //     },
  //   ]);
  // };

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        { todoId ? <TodoScreen/> : <MainScreen/> }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
