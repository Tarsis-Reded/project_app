import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Login from './views/Login';
import Menu from './views/Menu';
import Map from './views/Map';
import Config from './views/Config';
import itemRoom from './components/itemroom';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group  screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Config" component={Config}/>
            <Stack.Screen name="itemRoom" component={itemRoom}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
  );
}