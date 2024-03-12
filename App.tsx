import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Login from './views/Login';
import Menu from './views/Menu';
import Map from './views/Map';
import Config from './views/Config';
import ModMenu from './components/ModMenu';
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

export default function App() {

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </DrawerContentScrollView>
    );
  }
  return (
    <NavigationContainer>
    <Drawer.Navigator 
      drawerContent={(props) => <ModMenu {...props} />}
      screenOptions={{
        // drawerStyle: {width: '65%',paddingTop: 15,height: 50, backgroundColor: "black", justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', alignSelf: 'flex-end'},
        // overlayColor: '#7f7f7f',
        // overlayColor: 'transparent',
        // drawerHideStatusBarOnOpen: false,
        // drawerStatusBarAnimation: 'fade'
      }}
      > 
      {/* ENTENDAAAAAAAAAAAAAAAAAAAA ESSSSSSSSSSSSSSSAAAAAAAAAAAAAA PORRRRRRRRRRRRRRRRRAAAAAAAAAAAAAAAA */}
      <Drawer.Group screenOptions={{ headerShown: false, drawerPosition: 'right', drawerType: 'front', }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Config" component={Config} />
      </Drawer.Group>
    </Drawer.Navigator>
  </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Group screenOptions={{ headerShown: false }}> 
    //       <Stack.Screen name="Home" component={Home} />
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