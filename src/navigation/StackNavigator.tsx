import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import HomeScreen from '../screens/HomeScreen';


const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={{
          cardStyle:{
            backgroundColor:'white'
          },
          headerShown:false
        }}
       />
       <Stack.Screen name="Animation101Screen" component={Animation101Screen} 
        options={{
          cardStyle:{
            backgroundColor:'white'
          },
          headerShown:false
        }}
       />
       <Stack.Screen name="Animation102Screen" component={Animation102Screen} 
        options={{
          cardStyle:{
            backgroundColor:'white'
          },
          headerShown:false
        }}
       />
    </Stack.Navigator>
  );
}