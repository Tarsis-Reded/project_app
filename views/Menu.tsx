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
import EditDevice from '../components/editDevice';
import styles from '../styles/styles';
import 'react-native-gesture-handler';
import { Drawer } from 'react-native-drawer-layout';
import AddRoom from '../components/addRoom';
import { helper } from '../utils/helpers';
import OptionAdd from '../components/OptionAdd';

// const dataRooms = rooms.dataRooms;

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';

export default function App(room) {

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  let devices = data.devices.filter((room) => room.partHome === selectedRoom)
  // let devices = rooms.dataRooms room.route.params.room
  //   .filter(room => Object.keys(room)[0] === selectedRoom)
  //   .map(room => Object.values(room)[0]);
  const [navigation, setNavigation] = useState(room.navigation)
  const [selected, setSelected] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(room.route.params.room);
  const [deviceSearch, setDeviceSearch] = useState('');
  const [deviceResults, setDeviceResults] = useState(devices);
  const [deviceEdit, setDeviceEdit] = useState('');
  const [update, setUpdate] = useState(false);
  const [roomsSearch, RoomsSearch] = useState(rooms.dataRooms);
  const [roomsResults, RoomsResults] = useState(rooms.dataRooms);
  const selectAdd = useRef<Modalize>(null);
  const RoomRef = useRef<Modalize>(null);
  const addRoom = (option) => {
    selectAdd.current.close();
    RoomRef.current.open();
  }

  useEffect(() => {
    devices = data.devices.filter((room) => room.partHome === selectedRoom)
    setDeviceResults(devices);
    setDeviceSearch("");
  }, [selectedRoom])

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
              modalizeRef.current?.open();
              setDeviceEdit(item)
              setUpdate(false)
            }}>
              <Image source={images.edit} style={{ width: 45, height: 30, resizeMode: 'contain' }} />
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
              defaultValue={data.roomsOptions.find(room => room == selectedRoom.replace(/_/g, " "))}
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
            onPress={() => {
              navigation.openDrawer()
              setUpdate(false)
            }}>
            <Image source={images.options} style={{ width: 39, height: 39, resizeMode: 'contain' }} />
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
                onPress={() => navigation.navigate('HouseRooms', { id: 110 })}>
                <Image source={images.map} style={styles.imageButtonDown} />
              </TouchableOpacity>
            </View>
            {/* abrir modal */}
            <View style={{ flex: 1, paddingLeft: 120 }}>
              <TouchableOpacity
                onPress={() => selectAdd.current.open()}>
                <Image source={images.add} style={styles.imageButtonDown} />
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
          <EditDevice item={deviceEdit} />
        </Modalize>
        <Modalize ref={selectAdd}
          onOpen={() => {
            helper(navigation, false)
          }}
          snapPoint={175}
          modalHeight={175}
          handleStyle={{ width: 100 }}
          disableScrollIfPossible={true}
          keyboardAvoidingBehavior={'height'}
          withHandle={true}
          scrollViewProps={{ showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false }}
          onClose={() => {
            helper(navigation, true)
          }}
        >
          <OptionAdd option={addRoom} />


        </Modalize>

        <Modalize ref={RoomRef}
          onOpen={() => {
            helper(navigation, false)
          }}
          onOpened={() => {
            helper(navigation, false)
          }}
          snapPoint={500}
          modalHeight={500}
          handleStyle={{ width: 100 }}
          disableScrollIfPossible={true}
          keyboardAvoidingBehavior={'height'}
          // openAnimationConfig={} entender melhor isso 
          withHandle={true}
          scrollViewProps={{ showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false }}
          onClose={() => {
            helper(navigation, true)
          }}
        >
          <AddRoom />
        </Modalize>
      </SafeAreaView>
    );
  }
};
