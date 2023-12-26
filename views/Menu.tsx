import React, { useState, useEffect, useContext } from 'react';
import { Modal, Alert, Pressable, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { data, rooms } from '../utils/getData';
import { images } from '../utils/getImages';
import SelectDropdown from 'react-native-select-dropdown';
import { SelectList } from 'react-native-dropdown-select-list';
import AppLoading from 'expo-app-loading';
import ToggleSwitch from 'toggle-switch-react-native';
import ModalC from '../components/modal';
// const dataRooms = rooms.dataRooms;

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';

export default function App({ navigation }) {
  let devices = rooms.dataRooms
    .filter(room => Object.keys(room)[0] === selectedRoom)
    .map(room => Object.values(room)[0]);
  const [selected, setSelected] = useState("");
  const [selectedRoom, setSelectedRoom] = useState('Quarto');
  const [modalVisible, setModalVisible] = useState(false);
  const [deviceSearch, setDeviceSearch] = useState('');
  const [deviceResults, setDeviceResults] = useState(devices[0]);
  const [roomsSearch, RoomsSearch] = useState(rooms.dataRooms);
  const [roomsResults, RoomsResults] = useState(rooms.dataRooms);

  useEffect(() => {
    devices = rooms.dataRooms
      .filter(room => Object.keys(room)[0] === selectedRoom)
      .map(room => Object.values(room)[0]);
    setDeviceResults(devices[0]);
    setDeviceSearch("");
  }, [selectedRoom])

  useEffect(() => {
    devices = rooms.dataRooms
      .filter(room => Object.keys(room)[0] === selectedRoom)
      .map(room => Object.values(room)[0]);

    if (deviceSearch === 'all' || deviceSearch === '') {
      setDeviceResults(devices[0]);
    } else {
      setDeviceResults(devices[0].filter((item) => {
        return item.type === deviceSearch ? true : false;
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
    const renderComModal = ({ item, open }) => {
      console.log(item);
      return <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{
            backgroundColor: '#EDEFF2', borderWidth: 1, borderColor: 'black', borderRadius: 20, alignSelf: 'center', shadowColor: 'black',
            shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 15
          }}>
            <View style={{ flexDirection: 'row', margin: 10, width: 330, height: 50 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ flexDirection: "row", alignSelf: "center", paddingVertical: 12, fontFamily: 'Poppins_400Regular', fontSize: 18, color: 'black', left: 17 }}>
                  Dispositivo
                </Text>
              </View>

              <View style={{ width: 30, height: 30, justifyContent: 'flex-start', alignSelf: 'flex-start', alignItems: 'flex-end' }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Image source={require('../assets/Images/close.png')} style={{ width: 21, height: 21, resizeMode: 'contain' }} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{ alignSelf: "flex-start", fontFamily: 'Poppins_400Regular', fontSize: 17, color: 'black', left: 15 }}>
                Nome:
              </Text>
              <TextInput
                style={{ height: 40, marginLeft: 12, marginRight: 12, borderWidth: 1, borderRadius: 7, padding: 5, backgroundColor: 'white' }}
                // onChangeText={onChangeText}
                // placeholder="TESTE"
                defaultValue={item.title}
              // value={text}
              // keyboardType="numeric"
              // onChangeText={onChangeNumber}
              />
            </View>
            <View style={{ paddingTop: 10 }}>
              <Text style={{ alignSelf: "flex-start", fontFamily: 'Poppins_400Regular', fontSize: 17, color: 'black', left: 15 }}>
                Comôdos:
              </Text>
              <SelectList
                fontFamily={'Poppins_400Regular'}
                data={data.roomsHouse}
                closeicon={
                  <Image
                    style={{ width: 15, resizeMode: 'contain', }}
                    source={require('../assets/Images/close.png')} />
                }
                searchicon={
                  <Image
                    style={{ width: 23, resizeMode: 'contain', }}
                    source={require('../assets/Images/search.png')} />
                }
                arrowicon={<Text></Text>}
                searchPlaceholder={''}
                setSelected={setSelected}
                defaultOption={data.roomsHouse.find(({ value }) => value === item.partHome)}    //deixar dinaminamico de acordo com o dispositivo
                boxStyles={{ borderColor: 'black', borderWidth: 1, width: 320, height: 45, backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center', borderRadius: 7 }}
                // inputStyles={{ fontSize: 15, fontFamily: 'Poppins_400Regular', alignContent: 'center'}}
                dropdownStyles={{ backgroundColor: 'white', width: 320, alignSelf: 'center' }}
                placeholder='Buscar por dispositivo'
                notFoundText='Esse dispositivo não existe'
                onSelect={() => console.log(selected)}
              />
              <View style={{ paddingTop: 15, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', width: 320, height: 60 }}>
                <View>
                  <ToggleSwitch
                    onColor="grey"
                    offColor="#dedede"
                    label="Habilitado: "
                    labelStyle={{ fontFamily: 'Poppins_400Regular', fontSize: 17 }}
                    isOn={true}
                    onToggle={() => console.log(false)}
                  />
                </View>
                <View style={{ padding: 10 }}>
                  <ToggleSwitch
                    onColor="grey"
                    offColor="#dedede"
                    labelStyle={{ fontFamily: 'Poppins_400Regular', fontSize: 17 }}
                    label="Status: "
                    isOn={false}
                    onToggle={() => console.log(false)}
                  />
                </View>
              </View>
            </View>
            <View style={{ paddingVertical: 8 }}>
              <Text style={{ alignSelf: "flex-start", fontFamily: 'Poppins_400Regular', fontSize: 17, color: 'black', left: 15 }}>
                Descrição:
              </Text>
              <TextInput
                style={{ marginLeft: 12, marginRight: 12, borderWidth: 1, borderRadius: 7, padding: 5, height: 80, backgroundColor: 'white' }}
                // onChangeText={onChangeText}
                placeholder=""
              // value={text}
              // keyboardType="numeric"
              // onChangeText={onChangeNumber}
              />
            </View>
          </View>
        </View>
      </Modal>
    }

    function renderModal(item) {
      setModalVisible(true)
      console.log(modalVisible)

    }

    const renderItem = ({ item }) => {
      let imagePath;
      let title = item.title;
      let ind = 0;
      switch (item.type) {
        case 'socket':
          imagePath = item.state ? images.socket_on : images.socket_off
          break;
        case 'air':
          imagePath = item.state ? images.air_on : images.air_off
          break;
        case 'light':
        case 'lamp':
          imagePath = item.state ? images.light_on : images.light_off
          break;
        case 'fan':
          imagePath = item.state ? images.fan_on : images.fan_off
          break;
        case 'computer':
          imagePath = item.state ? images.computer_on : images.computer_off
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
              isOn={item.state}
              onToggle={(isOn) => {
                const updatedDevices = [...data.devices];
                const deviceIndex = updatedDevices.findIndex((d) => d.id === item.id);
                if (isOn == true) {
                  updatedDevices[deviceIndex].state = true;
                  console.log(true)
                  console.log(deviceIndex)

                } else {
                  updatedDevices[deviceIndex].state = false;
                  console.log(deviceIndex)
                  console.log(false)
                  // this.setState(true);
                  // this.onToggle(true);
                }
              }}
            />

            <TouchableOpacity

              onPress={() => {
                renderModal(item)
                // setModalVisible(true) 
              }}>
              <Image source={require('../assets/Images/edit.png')} style={{ width: 45, height: 30, resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top, ...styles.container, backgroundColor: 'white' }}>
        {/* Conteudo */}

        {/* Nav bar */}


        <View style={{ flexDirection: "row", alignSelf: 'flex-end', paddingVertical: 12, justifyContent: 'flex-end', alignItems: 'center' }}>

          <View style={styles.centerRow}>
            <SelectDropdown
              data={data.roomsOptions}
              onSelect={(selectedItem) => {setSelectedRoom(selectedItem.replace(/ /g, "_")) }}
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
            onPress={() => alert("Button pressed")}>
            <Image source={require('../assets/Images/menu.png')} style={styles.imageButtonUp} />
          </TouchableOpacity>
          {/* </View>  */}
        </View>

        {/* Dispositivos */}
        <View style={{ backgroundColor: '#EDEFF2', flex: 2, alignSelf: 'center', width: '99%', height: 50, borderRadius: 15 }}>

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
                console.log(selected)
                setDeviceSearch(data?.devicesOptions[selected]?.type)
                console.log(data?.devicesOptions[selected]?.type)
              }}
            />

          </View>

          <View style={{ flexDirection: 'column', flex: 3, width: 320, alignSelf: 'center', borderRadius: 7 }}>
            <FlatList
              data={deviceResults}
              renderItem={renderItem}  //({item}) => <COMPONENTE PARAMS/> 
              keyExtractor={item => item.id}
            />
          </View>

          <View style={{ flexDirection: 'row', paddingVertical: 15, padding: 10 }}>

            <View style={{ flex: 1, paddingRight: 120 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Map', { id: 130 })}>
                <Image source={require('../assets/Images/mapa.png')} style={styles.imageButtonDown} />
              </TouchableOpacity>
            </View>
            {/* abrir modal */}
            <View style={{ flex: 1, paddingLeft: 120 }}>
              <TouchableOpacity
                onPress={() => alert("Button pressed")}>
                <Image source={require('../assets/Images/adicionar.png')} style={styles.imageButtonDown} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Nav bar */}
      </SafeAreaView>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 20,
    flexDirection: "row",
    alignSelf: "center"
  },
  centerRow: {
    flexDirection: "row",
    left: 38
  },
  startRow: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  twoContainer: {
    flexDirection: "row",
    alignSelf: "center",
    paddingVertical: 12,
    fontFamily: 'Poppins_400Regular',
    fontSize: 18
  },
  centerColumn: {
    flexDirection: "column",
    alignSelf: "center"
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    // borderRadius: 8,
    // borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: { color: '#000000', alignSelf: "center", fontSize: 16, fontFamily: 'Poppins_400Regular' },
  dropdown1DropdownStyle: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopEndRadius: 12, borderTopStartRadius: 12 }, //
  dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' }, // 
  dropdown1RowTxtStyle: { color: '#444', textAlign: 'center', fontFamily: 'Poppins_400Regular', fontSize: 16 }, // 
  font: { fontFamily: 'Poppins_400Regular', fontSize: 18, paddingVertica: 6 },

  dropdown2BtnStyle: { // botão principal
    width: '80%',
    height: 50,
    backgroundColor: '#e600ff',
    borderRadius: 8,
  },

  dropdown2BtnTxtStyle: { // texto inicial 
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  dropdown2DropdownStyle: { // 
    backgroundColor: '#e600ff',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  dropdown2RowStyle: { backgroundColor: '#444', borderBottomColor: '#C5C5C5' },

  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  images: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  imageButtonDown: {
    width: 45,
    height: 45,
    resizeMode: 'contain'
  },
  imageComponent: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  imageButtonUp: {
    width: 45,
    height: 45,
    resizeMode: 'contain'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    width: 350,
    height: 600,
    shadowColor: 'black',
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    flexDirection: 'row',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
