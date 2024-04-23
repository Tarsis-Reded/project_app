import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert, Dimensions, LogBox } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HouseRooms from './views/HouseRooms';
import Login from './views/Login';
import Menu from './views/Menu';
import Map from './views/Map';
import Config from './views/Config';
import ModMenu from './components/ModMenu';
import AddItem from './components/AddItem';
import { useWindowDimensions } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator 
      drawerContent={(props) => <ModMenu {...props} />}
      screenOptions={{
         drawerStyle: {width: '60%'},
        // drawerStyle: {width: '65%',paddingTop: 15,height: 50, backgroundColor: "black", justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', alignSelf: 'flex-end'},
        // overlayColor: '#7f7f7f',
        overlayColor: 'transparent',
        // drawerHideStatusBarOnOpen: false,
        // drawerStatusBarAnimation: 'fade'
      }}
      > 
      <Drawer.Group screenOptions={{ headerShown: false, drawerPosition: 'right', drawerType: 'front', }}>
        <Drawer.Screen name="HouseRooms" component={HouseRooms} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Config" component={Config} />
        <Drawer.Screen name="AddItem" component={AddItem} />
      </Drawer.Group>
    </Drawer.Navigator>
  </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Group screenOptions={{ headerShown: false }}> 
    //       <Stack.Screen name="HouseRooms" component={HouseRooms} />
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="Menu" component={Menu} />
    //       <Stack.Screen name="Map" component={Map} />
    //       <Stack.Screen name="Config" component={Config} />
    //       <Stack.Screen name="ModalMenu" component={ModMenu} />
    //     </Stack.Group>
    //   </Stack.Navigator>
    // </NavigationContainer>

  );
}