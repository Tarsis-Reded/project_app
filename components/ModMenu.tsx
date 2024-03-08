import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Modal, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Pressable, Alert, Button } from 'react-native';

import styles from '../styles/styles';

// Defina o tipo da navegação
type NavigationType = NavigationProp<ParamList>; 

export default function ModMenu() {
   const navigation: NavigationType = useNavigation<NavigationType>();
   const inset = useSafeAreaInsets()
   const windowWidth = Dimensions.get('window').width;
   const windowHeight = Dimensions.get('window').height;


   return (
      <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top, backgroundColor: 'white', width: 230, height: windowHeight }}>
         <Button
            title="Back"
            onPress={() => {
               navigation.navigate('Config');
            }}
         />
         <Button
            title={`Go to Login`}
            onPress={() => { navigation.navigate('Login') }}
         />
         <Button
            title={`Go to Home`}
            onPress={() => { navigation.navigate('Home') }}
         />
      </SafeAreaView>


   );
}

type ParamList = {
   Home: undefined;
   Config: undefined;
   Login: undefined;
   Profile: { userId: string };
   Settings: { theme: 'light' | 'dark' };
};



// import React, { useState, useEffect, useRef } from 'react';
// // import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
// import { Modal, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Pressable, Alert, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


// export default function ModMenu({ screenName }) {

//    const navigation = useNavigation();

//    const [teste] = useState(navigation);

//    console.log("teste", navigation)
//    console.log("teste", teste)
//    const inset = useSafeAreaInsets()
//    const windowWidth = Dimensions.get('window').width;
//    const windowHeight = Dimensions.get('window').height;

//    return (
//       <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top, backgroundColor: 'white', width: 230, height: windowHeight }}>
//          <Button
//       title="Back"
//       onPress={() => {
//         navigation.navigate('Config');
//       }}
//     />
//          {/* <Button
//        title={`Go to Login`}
//        onPress={() => {navigation.navigate('Login')}}
//        />
//     <Button
//        title={`Go to Home`}
//        onPress={() => {navigation.navigate('Home')}}
//     />
//     <Button
//        title={`Go to`}
//         onPress={() => {navigation.navigate('Menu', { room: 'Sala'})}}
//     /> */}
//       </SafeAreaView>
//    );
// }