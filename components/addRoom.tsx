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

const AddRoom = () => {
  const navigation: NavigationType = useNavigation<NavigationType>();
  const inset = useSafeAreaInsets()
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{ flex: 1, paddingTop: 20 , alignSelf: 'center',borderRadius: 15 , backgroundColor: 'white', alignItems: 'center', alignContent: 'center', justifyContent: 'center', width: windowWidth, height:500 }}>
        <View style={{height: 50, borderBottomWidth:1, borderColor: "#cccccc", width: windowWidth-50, alignContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>Adicionar Cômodo</Text>
        </View>
        <View style={{flex: 1,backgroundColor: 'white'}}>
        </View>
    </View>
  );
}

export default AddRoom;