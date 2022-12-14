import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import AlertScreen from '../screens/AlertScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import CustomSectionList from '../screens/CustomSectionList';
import HomeScreen from '../screens/HomeScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import ModalScreen from '../screens/ModalScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import SlidesScreen from '../screens/SlidesScreen';
import SwitchScreen from '../screens/SwitchScreen';
import TextInputScreen from '../screens/TextInputScreen';


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
       <Stack.Screen name="SwitchScreen" component={SwitchScreen} 
        options={{
          cardStyle:{
            backgroundColor:'white'
          },
          headerShown:false
        }}
       />
       <Stack.Screen name="AlertScreen" component={AlertScreen} 
        options={{
          cardStyle:{
            backgroundColor:'white'
          },
          headerShown:false
        }}
       />
       <Stack.Screen name="TextInputScreen" component={TextInputScreen} 
        options={{
          cardStyle:{
            backgroundColor:'white'
          },
          headerShown:false
        }}
       />
       <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} 
        options={{
          cardStyle:{
            backgroundColor:'white'
          },
          headerShown:false
        }}
       />
       <Stack.Screen name="CustomSectionList" component={CustomSectionList} 
        options={{
          cardStyle:{
            backgroundColor:'white'
          },
          headerShown:false
        }}
       />
       <Stack.Screen name="ModalScreen" component={ModalScreen} 
        options={{
          cardStyle:{
            backgroundColor:'white'
          },
          headerShown:false
        }}
       />
       <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} 
        options={{
          cardStyle:{
            backgroundColor:'white'
          },
          headerShown:false
        }}
       />
       <Stack.Screen name="SlidesScreen" component={SlidesScreen} 
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