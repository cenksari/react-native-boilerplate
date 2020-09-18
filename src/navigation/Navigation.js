import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/Main/MainScreen';

const Stack = createStackNavigator();

const StackScreens = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='MainStack' component={MainScreen} />
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator name='NormalStack' component={StackScreens} />
  </NavigationContainer>
);

export default Navigation;
