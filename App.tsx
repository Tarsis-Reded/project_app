import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Login from './views/Login';
import Menu from './views/Menu';
import Map from './views/Map';
import Config from './views/Config';
import itemRoom from './components/itemroom';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Feed Screen</Text> */}
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function DrawerMain() {
  return (
    <Drawer.Navigator >
      <Drawer.Group screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Cômodo" component={Home} options={{ drawerPosition: 'left', drawerType: 'slide'}} />
        <Drawer.Screen name="Login" component={Login} options={{ drawerPosition: 'right', drawerType: 'slide'}} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}
// Aqui para o menu depois dos comodos vamos pricicar criar um novo drawer e seleciona-lo quando abrir a tela 

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}> 
          <Stack.Screen name="MyDrawer" component={DrawerMain}/>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Config" component={Config} />
        </Stack.Group>
      </Stack.Navigator>
      {/* <Drawer.Navigator>
          <Drawer.Screen name="Feed" component={Feed} />
          <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator> */}
    </NavigationContainer>

  );
}