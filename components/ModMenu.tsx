import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../utils/getImages';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { data, rooms, user } from '../utils/getData';
import { NavigationType } from '../Models/NavigationType';
import { Modal, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Pressable, Alert, Button } from 'react-native';
import {
   DrawerContentScrollView,
   DrawerItemList,
   DrawerItem
} from '@react-navigation/drawer';
import styles from '../styles/styles';
import {
   useFonts,
   Poppins_400Regular,
   Poppins_500Medium,
} from '@expo-google-fonts/poppins';


export default function ModMenu(props) {
   const navigation: NavigationType = useNavigation<NavigationType>();
   const inset = useSafeAreaInsets()
   const windowWidth = Dimensions.get('window').width;
   const windowHeight = Dimensions.get('window').height;
   const [option, setOption] = useState('');

   return (
      <SafeAreaView style={{ paddingBottom: 10, paddingTop: inset.top + 5, ...styles.container, backgroundColor: 'transparent', flex: 1 }}>
         <View style={{ paddingTop: inset.top, backgroundColor: '#e5e5e5', height: windowHeight, borderTopLeftRadius: 18 }}>
            <View style={{ width: 190, justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
               <View style={{ height: 150, width: 150, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{height: 130, backgroundColor: '#727272', borderRadius: 100, width: 130, justifyContent: 'center', alignContent: 'center' }}>
                     <Image
                        style={{ backgroundColor: 'white', height: 125, borderRadius: 62, width: 125, borderWidth: 1, borderColor: 'black', alignSelf: 'center' }}
                        source={images.perfilPhoto} />

                     <TouchableOpacity style={{ height: 33, width: 33, borderRadius: 20, backgroundColor: '#666666', alignSelf: 'flex-end', justifyContent: 'center', alignContent: 'center' }}>
                        <Image source={images.ediPerfil} style={{ height: 23, width: 23, alignSelf: 'center' }} />
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Poppins_400Regular', color: 'black', fontSize: 16, fontWeight: '700' }}>
                     {user.nickName ?? user.name}
                  </Text>
               </View>
               <View style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', }}>
                  <Text style={{ fontFamily: 'Poppins_400Regular', color: 'black', fontSize: 16, fontWeight: '700' }}>
                     {user.email}
                  </Text>
               </View>
            </View>
            <DrawerContentScrollView {...props} activeTintColor=' black' style={{}}>
               <DrawerItem
                  labelStyle={{}}
                  pressColor='black'
                  activeTintColor='black'
                  focused={option == 'HouseRooms'}
                  label={'Cômodos'}
                  onPress={() => {
                     setOption('HouseRooms')
                     navigation.navigate('HouseRooms')
                  }}
               />
               <DrawerItem
                  pressColor='black'
                  activeTintColor='black'
                  focused={option == 'Perfil'}
                  label={'Perfil'}
                  onPress={() => {
                     setOption('Perfil')
                     // navigation.navigate('HouseRooms')
                  }}
               />
               <DrawerItem
                  focused={option == 'Config'}
                  pressColor='black'
                  activeTintColor='black'
                  label="Configuração"
                  onPress={() => {
                     setOption('Config')
                     navigation.navigate('Config');
                  }}
               />

               <DrawerItem
                  labelStyle={{ color: '#ee5555' }}
                  pressColor='red'
                  activeTintColor='black'
                  label={`LogOut`}
                  focused={option == 'LogOut'}
                  onPress={() => {
                     setOption('Login')
                     alert("Sua sessão foi desconectada")
                     // navigation.navigate('Login')
                  }}
               />
               <DrawerItem
                  pressColor='red'
                  activeTintColor='black'
                  focused={option == 'Help'}
                  label="Help"
                  onPress={() => { setOption('Help') }}
               />
            </DrawerContentScrollView>
         </View>

      </SafeAreaView>
   );
}

// type ParamList = {
//    HouseRooms: undefined;
//    Config: undefined;
//    Login: undefined;
//    Profile: { userId: string };
//    Settings: { theme: 'light' | 'dark' };
// };