/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';

function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'PocketFish'}} />
        </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;
