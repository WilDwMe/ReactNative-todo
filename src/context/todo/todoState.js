import React, { useReducer, useContext } from "react";
import { Alert } from 'react-native';
import { TodoContext } from "./todoContext";
import { ScreenContext } from '../screen/screenContext';
import { todoReducer } from "./todoReducer";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";

export const TodoState = ({ children }) => {
  
    const initialState = {
        todos: [],
        loading: false,
        error: null
    }
    const { changeScreen } = useContext(ScreenContext);
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = async title => {
        const response = await fetch('https://react-native-todo--app-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title})
        })
        const data = await response.json();
        dispatch({ type: ADD_TODO, title, id: data.name });
    };

    const removeTodo = id => {
    const todo = state.todos.find(t => t.id = id)
   Alert.alert('Delete task', `Are you sure you want to delete "${todo.title}" ?`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'DELETE',
        style: 'destructive',
        cancelable: true,
        onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id });
        },
      },
    ]);
    };

    const updateTodo = (id, title) => {
        dispatch({ type: UPDATE_TODO, id, title });
    };

    const fetchTodos = async () => {
        const response = await fetch('https://react-native-todo--app-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
            method: 'GET',
            headers: { 'Content-type': 'application/json' }
        });
        const data = await response.json();
        console.log(data);
    }
    const showLoader = () => dispatch({ type: 'SHOW_LOADER' });
    const hideLoader = () => dispatch({ type: 'HIDE_LOADER' });
    const showError = (error) => dispatch({ type: 'SHOW_ERROR', error });
    const clearError = () => dispatch({ type: 'CLEAR_ERROR' });

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                loading: state.loading,
                error: state.error,
                addTodo,
                removeTodo,
                updateTodo,
                fetchTodos
            }}>
            {children}
        </TodoContext.Provider>
    )
}