import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import ToggleSwitch from 'toggle-switch-react-native';


import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = React.useState("");
  const inset = useSafeAreaInsets()
  const roomsHouse = [
    { key: '1', value: 'Sala' },
    { key: '2', value: 'Cozinha' },
    { key: '3', value: 'Quarto' },
    { key: '4', value: 'Sala de Jantar' }
  ]

  return (

    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{
            backgroundColor: '#EDEFF2', borderWidth: 1, borderColor: 'black', borderRadius: 20, alignSelf: 'center', shadowColor: 'black', shadowColor: '#000',
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
                placeholder=""
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
                data={roomsHouse}
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
                defaultOption={roomsHouse[0]}    //deixar dinaminamico de acordo com o dispositivo
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
                style={{ height: 40, marginLeft: 12, marginRight: 12, borderWidth: 1, borderRadius: 7, padding: 5, height: 80, backgroundColor: 'white' }}
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
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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

export default App;
