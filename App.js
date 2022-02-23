import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/todoState';

// Loading Async thinks before render App here bellow

const loadApplication = async () => {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  // check loading state here bellow:

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <TodoState>
      <MainLayout />
    </TodoState>
  );
}


