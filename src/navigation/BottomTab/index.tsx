import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodoScreen from 'screens/todo';
import HomeScreen from 'screens/home';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Todo" component={TodoScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
