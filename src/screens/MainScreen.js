import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  let content = (
    <FlatList
    data={todos}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />}
  />
  )

  if (todos.length === 0) {
    content = <View style={styles.imageWrap}>
      <Image style={styles.image} source={require('../../assets/no_items.png')} />
      {/* source={{
        uri: 'http://link_to_romote_image'
      }} */}
       </View>
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#6495ed',
    fontSize: 14,
    alignSelf: 'center',
  },
  imageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});
