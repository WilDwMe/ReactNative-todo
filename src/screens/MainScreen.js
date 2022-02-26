import React, {useState, useEffect, useContext, useCallback} from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { THEME } from '../theme';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const MainScreen = ({ openTodo }) => {
  const { addTodo, todos, removeTodo, fetchTodos, loading, error } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);

const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, [])
  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width);
    }
    Dimensions.addEventListener('change', update);

    return () => {
      Dimensions.removeEventListener('change', update);
    }
  })
  
  
  let content = (
    <View style={{ width: deviceWidth }}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />}
      />
    </View>
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imageWrap}>
        <Image style={styles.image} source={require('../../assets/no_items.png')} />
        {/* source={{
        uri: 'http://link_to_romote_image'
      }} */}
      </View>
    );
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
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
