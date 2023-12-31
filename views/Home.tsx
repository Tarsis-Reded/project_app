import React, { useState, useEffect, useRef } from 'react';
import { Modal, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Pressable, Alert, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { data, rooms, } from '../utils/getData';
import { images } from '../utils/getImages';
import SelectDropdown from 'react-native-select-dropdown';
import { SelectList } from 'react-native-dropdown-select-list';
import AppLoading from 'expo-app-loading';
import ToggleSwitch from 'toggle-switch-react-native';
import { Modalize } from 'react-native-modalize';
import EditModal from '../components/modal';
import styles from '../styles/styles';
import itemRoom from '../components/itemroom';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';

export default function Home({ navigation }) {

  const inset = useSafeAreaInsets()
  const [devices, setDevices] = useState(data.devices);
  const [roomInfos, setRoomInfos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    let dataRooms = []
    for (const room of data.roomsHouse) {
      let roomInfo = { name: room.value, countDevices: devices.filter(element => element.partHome === room.room).length, countActive: 0 }
      dataRooms.push(roomInfo)
      setRoomInfos(dataRooms)
    }
    console.log(roomInfos)
  }, [rooms])

  return (
    <SafeAreaView style={{ padding: 10, justifyContent: 'center', paddingBottom: 10, paddingTop: inset.top, backgroundColor: 'white', ...styles.container }}>

      <View style={{ flexDirection: "row", alignSelf: 'flex-end', paddingVertical: 12, justifyContent: 'flex-end', alignItems: 'center' }}>

        <View style={{flexDirection: "row", alignItems: 'center', width: 299, justifyContent: 'center', left: 25}}>
          <Text style={{flexDirection: "row", alignSelf: "center", fontFamily: 'Poppins_400Regular', fontSize: 20}}>Cômodos</Text>
        </View>
        
        <TouchableOpacity
          onPress={() => { setModalVisible(true) }}>
          <Image source={require('../assets/Images/menu.png')} style={styles.imageButtonUp} />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: '#E8E8E8', flex: 1, width: '99%', borderRadius: 15, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', height: 620, borderRadius: 7, paddingTop: 10 }}>
          <FlatList
            data={roomInfos}
            // extraData={update}
            numColumns={2}
            renderItem={({item}) => itemRoom(item, navigation)}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

      <Button
        title='Ir para Menu'
        onPress={() => navigation.navigate('Menu', {
          id: 100, room: 'Sala'
        })}
      />

      <Button
        title='Ir psara Login'
        onPress={() => navigation.navigate('Login', {
          id: 110, room: 'Sala'
        })}
      />
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{
            backgroundColor: '#EDEFF2', borderWidth: 1, borderColor: 'black', borderRadius: 20, alignSelf: 'center', shadowColor: 'black',
            shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 15, height: 230
          }}>
            <View style={{ flexDirection: 'row', margin: 10, width: 300, height: 50 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ flexDirection: "row", alignSelf: "center", paddingVertical: 12, fontFamily: 'Poppins_400Regular', fontSize: 18, color: 'black', left: 17 }}>
                  Menu
                </Text>
              </View>
              <View style={{ width: 30, height: 30, justifyContent: 'flex-start', alignSelf: 'flex-start', alignItems: 'flex-end' }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Image source={require('../assets/Images/close.png')} style={{ width: 21, height: 21, resizeMode: 'contain' }} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.buttonMenu}>
              <TouchableOpacity style={{ width: 290, height: 40, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => navigation.navigate('Home', { id: 110 })}>
                <Text>HOME</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonMenu}>
              <TouchableOpacity style={{ width: 290, height: 40, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => navigation.navigate('Config', { id: 195 })}>
                <Text>CONFIG</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonMenu}>
              <TouchableOpacity style={{ width: 290, height: 40, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => alert("Button pressed")} >
                <Text>
                  LOGOUT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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

