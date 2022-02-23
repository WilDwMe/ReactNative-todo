import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>}
      />
      <View>
        <Text style={styles.text}>Hold task for detele</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#6495ed',
    fontSize: 14,
    alignSelf: 'center'
}
});
