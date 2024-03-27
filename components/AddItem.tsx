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
import styles from '../styles/styles';

function AddItem({option}){
    const navigation: NavigationType = useNavigation<NavigationType>();
    const inset = useSafeAreaInsets()
    const handlerAddOption = (option) => { /// criar um outro componente
        // if (option == 'room') {
        //   return <AppLoading />;
        // } else {
        // }
        Alert.alert(`Adicionar ${option}`);
        // Aqui você pode fazer o que for necessário com o tipo recebido (COMODO ou DISPOSITIVO)
    };

    if (option == 'room'){
        return (
           
              <TouchableOpacity
                onPress={() => { handlerAddOption(option) }}>
                <Image source={images.options} style={styles.imageButtonUp} />
              </TouchableOpacity>
        );
    }else {
        return (
           
              <TouchableOpacity
                onPress={() => { handlerAddOption(option) }}>
                <Image source={images.options} style={styles.imageButtonUp} />
              </TouchableOpacity>
        );
    }
}

export default AddItem;