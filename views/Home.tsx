import React, { useState, useEffect, useRef } from 'react';
import { Modal, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Pressable, Alert, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { data, rooms } from '../utils/getData';
import { images } from '../utils/getImages';
import SelectDropdown from 'react-native-select-dropdown';
import { SelectList } from 'react-native-dropdown-select-list';
import AppLoading from 'expo-app-loading';
import ToggleSwitch from 'toggle-switch-react-native';
import { Modalize } from 'react-native-modalize';
import EditModal from '../components/modal';
import styles from '../styles/styles';

export default function Home({ navigation }) {
  const inset = useSafeAreaInsets()

  return (
    <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top, ...styles.container }}>
      <View style={{ flexDirection: "row", alignSelf: 'center', paddingVertical: 12, justifyContent: 'center', alignItems: 'center' }}>

        <View style={{justifyContent: 'center', alignContent: 'center', alignSelf: 'center', alignItems: 'center'}}>
         <Text>CÔMODOS</Text>
        </View>
        <TouchableOpacity style={{justifyContent: 'flex-end', alignContent: 'flex-end', alignSelf: 'flex-end', alignItems: 'flex-end'}}
          onPress={() => { console.log("dklnfjldsf") }}>
          <Image source={require('../assets/Images/menu.png')} style={styles.imageButtonUp} />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: 'black', flex: 2, alignSelf: 'center', width: '99%', height: 50, borderRadius: 15 }}>

      <Button
                    title='Ir para Menu'
                    onPress={() => navigation.navigate('Menu',{
                    id: 100
                })}
            />

            <Button
                        title='Ir para Login'
                        onPress={() => navigation.navigate('Login',{
                        id: 110
                    })}
                />
      </View>
    </SafeAreaView>
  );
}

// import React, {  } from 'react';
// import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
// import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
// import AppLoading from 'expo-app-loading';
// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
// } from '@expo-google-fonts/poppins';

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <Application />
//     </SafeAreaProvider>
//   );
// }

// export function Application({navigation}) {
//   let [fontsLoaded] = useFonts({
//     Poppins_400Regular,
//     Poppins_500Medium,
//   });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   } else {

//     const inset = useSafeAreaInsets()

//     return (
//       <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top, ...styles.container }}>
//          <Text>Esse é o componente Home</Text>
//                 <Button
//                         title='Ir para Login'
//                         onPress={() => navigation.navigate('Login',{
//                         id: 30
//                     })}
//                 />
//       </SafeAreaView>
//     );
//   }
// };

