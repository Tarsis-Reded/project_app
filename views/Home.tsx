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

export default function Home({ navigation }) {

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
  // navigation.openDrawer();
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
      <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        drawerType='slide'
        // overlayStyle={{ width: 15 }}
        drawerStyle = {{backgroundColor: 'white', width: 230, justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'flex-end'}}
        // drawerPosition='right'
        renderDrawerContent={() => {
          return  <ModMenu navigation={this.props.navigation} screenName={"Config"} />
        }}>
       
        <View style={{ flexDirection: "row", alignSelf: 'flex-start', paddingVertical: 12, justifyContent: 'flex-start', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => { setOpen(true) }}>
            <Image source={images.options} style={styles.imageButtonUp} />
          </TouchableOpacity>

          <View style={{ alignItems: 'center', width: 299, justifyContent: 'center' }}>
            <Text style={{ flexDirection: "row", alignSelf: "center", fontFamily: 'Poppins_400Regular', fontSize: 20 }}>
              Cômodos
            </Text>
          </View>

        </View>

        <View style={{ backgroundColor: '#E8E8E8', flex: 1, width: '99%', borderRadius: 15, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', height: 620, borderRadius: 7, paddingTop: 10 }}>
            <FlatList
              data={roomInfos}
              // extraData={update} 
              numColumns={2}
              renderItem={itemRoom}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
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
      </Drawer>
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

