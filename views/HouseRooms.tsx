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
import ModalDevice from '../components/modalDevice';
import styles from '../styles/styles';
import { Drawer } from 'react-native-drawer-layout';
import ModalMenu from '../components/modalMenu';
import ModMenu from '../components/ModMenu';


import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';

export default function HouseRooms({ navigation }) {

  const itemRoom = ({ item }) => {
    let imagePath;
    switch (item.room) {
      case 'Sala':
        imagePath = images.livingRoomIcon
        break;
      case 'Cozinha':
        imagePath = images.kitchen
        break;
      case 'Sala_de_Jantar':
        imagePath = images.diningRoom
        break;
      case 'Quarto':
        imagePath = images.bedRoom
        break;
      case 'Quarto_de_Jogos':
        imagePath = images.gamesRoomA
        break;
    }

    return (
      <View style={{ backgroundColor: 'white', flexDirection: 'column', width: 158, height: 158, borderWidth: 1, borderRadius: 15, margin: 8 }}>
        <TouchableOpacity style={{ width: 140, height: 140, alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}
          onPress={() => {
            navigation.navigate('Menu', { room: item.room })
          }}>

          <Text style={{ flexDirection: "row", alignSelf: "center", fontFamily: 'Poppins_400Regular', fontSize: 15, paddingTop: 10 }}>{item.name}</Text>
          <View style={{ padding: 13 }}>
            <Image source={imagePath} style={{ width: 60, height: 60, resizeMode: 'contain' }} />
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'column', }}>
              {/* <Text style={{ flexDirection: "row", alignSelf: "center", fontFamily: 'Poppins_400Regular', fontSize: 15}}>Ligado</Text> */}
              <Text style={{ flexDirection: "row", alignSelf: "center", fontFamily: 'Poppins_400Regular', fontSize: 15 }}>Dispositivos     </Text>
            </View>
            <View style={{ flexDirection: 'column', }}>
              {/* <Text style={{ flexDirection: "row", alignSelf: "center", fontFamily: 'Poppins_400Regular', fontSize: 15}}>{item.countActive}</Text> */}
              <Text style={{ flexDirection: "row", alignSelf: "center", fontFamily: 'Poppins_400Regular', fontSize: 15 }}>{item.countDevices}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    )
  }

  const inset = useSafeAreaInsets()
  const [devices, setDevices] = useState(data.devices);
  const [roomInfos, setRoomInfos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  // navigation.closeDrawer();

  useEffect(() => {
    let dataRooms = []
    for (const room of data.roomsHouse) {
      let roomInfo = {
        name: room.value, countDevices: devices.filter(element => element.partHome === room.room).length,
        countActive: devices.filter(element => element.partHome === room.room && element.on).length,
        room: room.room
      }
      dataRooms.push(roomInfo)
      setRoomInfos(dataRooms)
    }
  }, [rooms])

  return (
    <SafeAreaView style={{ padding: 10, justifyContent: 'center', paddingBottom: 10, paddingTop: inset.top, backgroundColor: 'white', ...styles.container }}>
      <View style={{ flexDirection: "row", alignSelf: 'flex-end', paddingVertical: 12, justifyContent: 'flex-start', alignItems: 'center' }}>

        <View style={{ alignItems: 'center', width: 299, justifyContent: 'center' }}>
          <Text style={{ flexDirection: "row", alignSelf: "center", fontFamily: 'Poppins_400Regular', fontSize: 20, left: 12 }}>
            Cômodos
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => { navigation.openDrawer() }}>
          <Image source={images.options} style={styles.imageButtonUp} />
        </TouchableOpacity>
      </View>
{/* alinhar no centro */}
      <View style={{ backgroundColor: '#E8E8E8', flex: 1, width: '99%', borderRadius: 15, alignSelf: 'center' }}> 
        <View style={{ flex: 1, flexDirection: 'row', height: 620, borderRadius: 7, paddingTop: 10}}>
          <FlatList
            data={roomInfos}
            // extraData={update} 
            numColumns={2}
            renderItem={itemRoom}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'flex-end', paddingVertical: 15, paddingEnd: 15}}>
          <View style={{  }}>
            <TouchableOpacity
              onPress={() => alert("Button pressed")}>
              <Image source={images.add} style={styles.imageButtonDown} />
            </TouchableOpacity>
          </View>
        </View>
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
//          <Text>Esse é o componente HouseRooms</Text>
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

