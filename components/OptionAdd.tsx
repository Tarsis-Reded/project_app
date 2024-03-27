import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../utils/getImages';
import { data, rooms, user } from '../utils/getData';
import { NavigationType } from '../Models/NavigationType';
import { Modal, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Pressable, Alert, Button } from 'react-native';
import {
   DrawerContentScrollView,
   DrawerItemList,
   DrawerItem
} from '@react-navigation/drawer';

const OptionAdd = ({option}) => {
  const navigation: NavigationType = useNavigation<NavigationType>();

  // const {modalVisible} = props
  // const [curruntItem, setCurruntItem] = useState('')
  // const [selected, setSelected] = useState("");
  // const [on, setOn] = useState(curruntItem.on);
  // const [state, setState] = useState(curruntItem.state);
  // const [name, setName] = useState(curruntItem.title);
  // const [desc, setDesc] = useState(curruntItem.desc);

  return (
    <View style={{ justifyContent: 'center', backgroundColor: 'white', borderRadius: 15, height: 150, alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
      <View style={{ backgroundColor: 'white', borderColor: 'black', borderRadius: 20, alignSelf: 'center', alignItems: 'center', alignContent: 'center', }}>
        <View style={{ flex: 1, paddingTop: 20 , alignSelf: 'center', alignItems: 'center', alignContent: 'center', justifyContent: 'center', width: 300, height:75 }}>
        <TouchableOpacity
            onPress={() => { option('room',)
            navigation.navigate('AddItem')
            }}>
            <Text style={{fontSize: 19}}> ADICIONAR CÔMODO</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', borderTopWidth: 2, borderTopColor: '#404040',
       alignContent: 'center', justifyContent: 'center', width: 300, height:75 }}>
          <TouchableOpacity
            onPress={() => {
               option('device'),
               navigation.navigate('AddItem')
              }}>
            <Text style={{fontSize: 19}}> ADICIONAR DISPOSITIVO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default OptionAdd;