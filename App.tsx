import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Login from './views/Login';
import Menu from './views/Menu';
import Map from './views/Map';
import Config from './views/Config';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ModMenu from './components/ModMenu';

const Drawer = createDrawerNavigator();

// function DrawerMain() {
//   return (
//     <Drawer.Navigator initialRouteName="Home" >
//       <Drawer.Group screenOptions={{ headerShown: false }}>
//         <Drawer.Screen name="Cômodo" component={Home} options={{ drawerPosition: 'right', drawerType: 'slide' }} />
//         <Drawer.Screen name="Login" component={Login} options={{ drawerPosition: 'right', drawerType: 'slide'}} />
//         <Drawer.Screen name="Config" component={Config}  options={{ drawerPosition: 'right', drawerType: 'slide', }} />
//       </Drawer.Group>
//     </Drawer.Navigator>
//   );
// }
// Aqui para o menu depois dos comodos vamos pricicar criar um novo drawer e seleciona-lo quando abrir a tela 

export default function App() {

  const Stack = createStackNavigator();

  return (
  //   <NavigationContainer>
  //   <Drawer.Navigator>
  //     <Drawer.Group screenOptions={{ headerShown: false }}>
  //       <Drawer.Screen name="Home" component={Home} />
  //       <Drawer.Screen name="Login" component={Login} />
  //       <Drawer.Screen name="Menu" component={Menu} />
  //       <Drawer.Screen name="Map" component={Map} />
  //       <Drawer.Screen name="Config" component={Config} />
  //     </Drawer.Group>
  //   </Drawer.Navigator>
  // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}> 
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Config" component={Config} />
          <Stack.Screen name="ModalMenu" component={ModMenu} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

  );
}