/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import axios from 'axios';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Login from './dataFetching';
import DashboardData from './Dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'grey',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="DashboardData" component={DashboardData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
