import React, { useState, useEffect, useRef } from 'react';
import { Modal, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Pressable, Alert } from 'react-native';
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
import itemRoom from '../components/itemRoom';
// const dataRooms = rooms.dataRooms;

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';

export default function App(room, { navigation }) {
console.log(room.route.params.room)

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  let devices = data.devices.filter((room) => room.partHome === selectedRoom)
  // let devices = rooms.dataRooms
  //   .filter(room => Object.keys(room)[0] === selectedRoom)
  //   .map(room => Object.values(room)[0]);
  const [selected, setSelected] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(room.route.params.room);
  const [deviceSearch, setDeviceSearch] = useState('');
  const [deviceResults, setDeviceResults] = useState(devices);
  const [deviceEdit, setDeviceEdit] = useState('');
  const [update, setUpdate] = useState(false);
  const [roomsSearch, RoomsSearch] = useState(rooms.dataRooms);
  const [roomsResults, RoomsResults] = useState(rooms.dataRooms);
  const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => { //É UMA BOA FORMA DE FAZER
  //   devices = rooms.dataRooms
  //     .filter(room => Object.keys(room)[0] === selectedRoom)
  //     .map(room => Object.values(room)[0]);
  //   setDeviceResults(devices[0]);
  //   setDeviceSearch("");
  // }, [selectedRoom])

  useEffect(() => {
    devices = data.devices.filter((room) => room.partHome === selectedRoom)
    setDeviceResults(devices);
    setDeviceSearch("");
  }, [selectedRoom])

  // useEffect(() => {
  //   devices = data.devices.filter((room) => room.partHome === selectedRoom)
  //   setDeviceResults(devices);
  //   setDeviceSearch("");
  // }, [devices])

  useEffect(() => {
    devices = data.devices.filter((room) => room.partHome === selectedRoom)
    if (deviceSearch === 'all' || deviceSearch === '') {
      setDeviceResults(devices);
    } else {
      setDeviceResults(devices.filter((item) => {
        return item.type === deviceSearch && item.partHome === selectedRoom ? true : false;
      }))
    }
  }, [deviceSearch])

  // fazer um desse para o botão de habilitar 
  let [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    const inset = useSafeAreaInsets()
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    type ItemProps = { title: string };
    // const Item = ({ title }) => (
    //   <View style={{ backgroundColor: 'white', flexDirection: 'row', borderWidth: 1, width: 320, height: 65, borderRadius: 7, marginBottom: 8 }}>
    //     <Image
    //             style={styles.imageComponent}
    //             source={require('../assets/Images/light_on.png')}
    //           />
    //   </View>
    // );

    const renderItem = ({ item }) => {
      let imagePath;
      let title = item.title;
      let ind = 0;
      switch (item.type) {
        case 'socket':
          imagePath = item.on ? images.socket_on : images.socket_off
          break;
        case 'air':
          imagePath = item.on ? images.air_on : images.air_off
          break;
        case 'light':
        case 'lamp':
          imagePath = item.on ? images.light_on : images.light_off
          break;
        case 'fan':
          imagePath = item.on ? images.fan_on : images.fan_off
          break;
        case 'computer':
          imagePath = item.on ? images.computer_on : images.computer_off
          break;
      }

      return (
        <View style={{ backgroundColor: 'white', flexDirection: 'row', borderWidth: 1, width: 320, height: 65, borderRadius: 7, marginBottom: 8 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'flex-start', paddingLeft: 15, paddingRight: 25 }}>
            <Image
              style={styles.imageComponent}
              source={imagePath}
            />
          </View>
          <View style={{ flex: 3, justifyContent: 'center', alignSelf: 'center', alignItems: 'flex-start', padding: 7 }}>
            <Text style={{ fontFamily: 'Poppins_400Regular', color: 'black', fontSize: 16 }}>
              {title}
            </Text>
          </View>
          <View style={{ flex: 3, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center' }}>

            <ToggleSwitch
              onColor="grey"
              offColor="#dedede"
              isOn={item.on}
              onToggle={() => {
                const updatedDevices = [...deviceResults];
                const deviceIndex = updatedDevices.findIndex((d) => d.id === item.id);
                updatedDevices[deviceIndex].on = !updatedDevices[deviceIndex].on;
                setDeviceResults(updatedDevices)
              }}
            />

            <TouchableOpacity onPress={() => {
              setDeviceEdit(item)
              modalizeRef.current?.open();
              setUpdate(false)
            }}>
              <Image source={require('../assets/Images/edit.png')} style={{ width: 45, height: 30, resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top, ...styles.container, backgroundColor: 'white' }}>
        <View style={{ flexDirection: "row", alignSelf: 'flex-end', paddingVertical: 12, justifyContent: 'flex-end', alignItems: 'center' }}>

          <View style={styles.centerRow}>
            <SelectDropdown
              data={data.roomsOptions}
              onSelect={(selectedItem) => { setSelectedRoom(selectedItem.replace(/ /g, "_")) }}
              defaultValue={data.roomsOptions.find(room => room == selectedRoom)}
              buttonTextAfterSelection={(selectedItem) => {
                return selectedItem;
              }}

              rowTextForSelection={(item) => {
                return item;
              }}

              buttonStyle={styles.dropdown1BtnStyle}

              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              // renderDropdownIcon={isOpened => ( ////Prop para inserir imagem no select box
              //   <Image source={require('./path/to/your/image.png')} style={{ width: 18, height: 18, tintColor: '#444' }} />
              // )}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
          {/* <View style={styles.startRow}> */}
          <TouchableOpacity
            onPress={() => { setModalVisible(true) }}>
            <Image source={require('../assets/Images/menu.png')} style={styles.imageButtonUp} />
          </TouchableOpacity>
          {/* </View>  */}
        </View>

        {/* Dispositivos */}
        <View style={{ backgroundColor: '#E8E8E8', flex: 2, alignSelf: 'center', width: '99%', height: 50, borderRadius: 15 }}>

          <View style={{ paddingVertical: 15, paddingTop: 0 }}>

            <Text style={styles.twoContainer}>Dispositivos</Text>

            <SelectList
              fontFamily={'Poppins_400Regular'}
              data={data.devicesOptions}
              defaultOption={data.devicesOptions[0]}
              closeicon={
                <Image
                  style={{ width: 15, resizeMode: 'contain', }}
                  source={images.closeIcon} />
              }
              searchicon={
                <Image
                  style={{ width: 23, resizeMode: 'contain', }}
                  source={images.searchIcon} />
              }
              arrowicon={<Text></Text>}
              searchPlaceholder={''}
              setSelected={setSelected}
              boxStyles={{ borderColor: 'black', borderWidth: 1, width: 320, height: 45, backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center', borderRadius: 7 }}
              // inputStyles={{ fontSize: 15, fontFamily: 'Poppins_400Regular', alignContent: 'center'}}
              dropdownStyles={{ backgroundColor: 'white', width: 320, alignSelf: 'center' }}
              placeholder='Buscar por dispositivo'
              notFoundText='Esse dispositivo não existe'
              onSelect={() => {
                setDeviceSearch(data?.devicesOptions[selected]?.type)
              }}
            />

          </View>

          <View style={{ flexDirection: 'column', flex: 3, width: 320, alignSelf: 'center', borderRadius: 7 }}>
            <FlatList
              data={deviceResults}
              extraData={update}
              renderItem={renderItem}  //({item}) => <COMPONENTE PARAMS/> 
              keyExtractor={item => item.id}
            />
          </View>

          <View style={{ flexDirection: 'row', paddingVertical: 15, padding: 10 }}>

            <View style={{ flex: 1, paddingRight: 120 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login', { id: 110 })}>
                <Image source={require('../assets/Images/mapa.png')} style={styles.imageButtonDown} />
              </TouchableOpacity>
            </View>
            {/* abrir modal */}
            <View style={{ flex: 1, paddingLeft: 110 }}>
              <TouchableOpacity
                onPress={() => alert("Button pressed")}>
                <Image source={require('../assets/Images/adicionar.png')} style={styles.imageButtonDown} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Modalize ref={modalizeRef}
          snapPoint={500}
          modalHeight={600}
          disableScrollIfPossible={true}
          keyboardAvoidingBehavior={'height'}
          // openAnimationConfig={} entender melhor isso 
          withHandle={true}
          scrollViewProps={{ showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false }}
          onClosed={() => {
            setDeviceResults(data.devices.filter((room) => room.partHome === selectedRoom))
            setUpdate(true)
          }}>
          <EditModal item={deviceEdit} />
        </Modalize>
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
};
