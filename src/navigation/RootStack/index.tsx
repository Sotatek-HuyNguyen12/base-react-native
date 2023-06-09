import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from 'navigation/BottomTab';
import LoginScreen from 'screens/auth/login';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'utils/NavigationUtils';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
