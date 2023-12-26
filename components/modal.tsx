import React, { } from 'react';
import { Modal, Alert, Pressable, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import { SelectList } from 'react-native-dropdown-select-list';
import AppLoading from 'expo-app-loading';
const socket_on = require('../assets/Images/socket_on.png');
const socket_off = require('../assets/Images/socket_off.png');
const air_on = require('../assets/Images/air_on.png');
const air_off = require('../assets/Images/air_off.png');
const light_on = require('../assets/Images/light_on.png');
const light_off = require('../assets/Images/light_off.png');
const computer_on = require('../assets/Images/computer_on.png');
const computer_off = require('../assets/Images/computer_off.png');
const fan_on = require('../assets/Images/fan_on.png');
const fan_off = require('../assets/Images/fan_off.png');
const arrowSearch = require('../assets/Images/arrowSearch.png');
const searchIcon = require('../assets/Images/search.png');
const closeIcon = require('../assets/Images/close.png');
import ToggleSwitch from 'toggle-switch-react-native'


const Menu = (item, open) => (
    <Modal
      animationType="fade"
      transparent={false}
      visible={open.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!open.modalVisible);
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
              defaultOption={roomsHouse.find(({ value }) => value === item.partHome)}    //deixar dinaminamico de acordo com o dispositivo
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