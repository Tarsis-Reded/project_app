



import React, { useState, useEffect, useRef } from 'react';
// import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Modal, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Pressable, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ModMenu({ navigationParam, screenName })
{
    console.log("teste", navigationParam)
    console.log("teste", screenName)

    const [navigation, setNavigation] = useState(navigationParam)

    const inset = useSafeAreaInsets()
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    return(
      <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top, backgroundColor: 'white', width: 230, height: windowHeight }}>
      <Button
       title={`Go to Config`}
        onPress={() => {navigation.navigate('Config')}}
    />
    <Button
       title={`Go to Login`}
       onPress={() => {navigation.navigate('Login')}}
       />
    <Button
       title={`Go to Home`}
       onPress={() => {navigation.navigate('Home')}}
    />
    <Button
       title={`Go to`}
        onPress={() => {navigation.navigate('Menu', { room: 'Sala'})}}
    />
   </SafeAreaView>
    );
}