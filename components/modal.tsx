import React, { useEffect, useState } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import { data, rooms } from '../utils/getData';
import { images } from '../utils/getImages';
import { SelectList } from 'react-native-dropdown-select-list';
import { Modal, Alert, Pressable, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const ModalC = ({ item }) => {
  const [curruntItem, setCurruntItem] = useState(item)
  const [selected, setSelected] = useState("");
  const [on, setOn] = useState(curruntItem.on);
  const [state, setState] = useState(curruntItem.state);
  const [name, setName] = useState(curruntItem.title);
  const [desc, setDesc] = useState(curruntItem.desc);

  return (
    <View style={{ justifyContent: 'flex-start', backgroundColor: '#EDEFF2', borderRadius: 15, height: 600 }}>
      <View style={{ backgroundColor: '#EDEFF2', borderColor: 'black', borderRadius: 20, alignSelf: 'center', shadowColor: 'black', }}>
        <View style={{ flexDirection: 'row', margin: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ flexDirection: "row", alignSelf: "center", paddingVertical: 12, fontFamily: 'Poppins_400Regular', fontSize: 18, color: 'black'}}>
              {curruntItem.title}
            </Text>
            <Text style={{ flexDirection: "row", alignSelf: "center", fontFamily: 'Poppins_400Regular', fontSize: 16, color: 'black'}}>
              {curruntItem.type}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ alignSelf: "flex-start", fontFamily: 'Poppins_400Regular', fontSize: 17, color: 'black', left: 15 }}>
            Nome:
          </Text>
          <TextInput
            style={{ height: 45, marginLeft: 12, marginRight: 12, width: 300, borderWidth: 1, borderRadius: 7, padding: 5, backgroundColor: 'white' }}
            onChangeText={setName}
            defaultValue={name}
            onEndEditing={() => {
              curruntItem.title = name
            }}
            value={name}
            // keyboardType="numeric"
            // onChangeText={() => { console.log("SHDIJABD") }}
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
            defaultOption={data.roomsHouse.find((rooms) => rooms.room === curruntItem.partHome)} 
            setSelected={setSelected}
            boxStyles={{ borderColor: 'black', borderWidth: 1, width: 300, height: 45, backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center', borderRadius: 7 }}
            // inputStyles={{ fontSize: 15, fontFamily: 'Poppins_400Regular', alignContent: 'center'}}
            dropdownStyles={{ backgroundColor: 'white', width: 300, alignSelf: 'center' }}
            placeholder='Buscar por dispositivo'
            notFoundText='Esse dispositivo não existe'

            onSelect={() => {
              curruntItem.partHome = data.roomsHouse[selected].room
            }}
          />
          <View style={{ paddingTop: 15, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', width: 320, height: 60 }}>
            <View>
              <ToggleSwitch
                onColor="grey"
                offColor="#dedede"
                label="Habilitado: "
                labelStyle={{ fontFamily: 'Poppins_400Regular', fontSize: 17 }}
                isOn={state}
                onToggle={() => {
                  setState(!state)
                  curruntItem.state = !state;
                }}
              />
            </View>
            <View style={{ padding: 10 }}>
              <ToggleSwitch
                onColor="grey"
                offColor="#dedede"
                labelStyle={{ fontFamily: 'Poppins_400Regular', fontSize: 17 }}
                label="Status: "
                isOn={on}
                onToggle={() => {
                  setOn(!on)
                  curruntItem.on = !on;
                }}
              />
            </View>
          </View>
        </View>
        <View style={{ paddingVertical: 8 }}>
          <Text style={{ alignSelf: "flex-start", fontFamily: 'Poppins_400Regular', fontSize: 17, color: 'black', left: 15 }}>
            Descrição:
          </Text>
          <TextInput
            style={{ marginLeft: 12, marginRight: 12, width: 300, borderWidth: 1, borderRadius: 7, padding: 5, height: 80, backgroundColor: 'white' }}
            // onChangeText={onChangeText}
            placeholder=""
            onChangeText={setDesc}
            defaultValue={desc}
            onEndEditing={() => {
              curruntItem.desc = desc
            }}
            value={desc}
          // value={text}
          // keyboardType="numeric"
          // onChangeText={onChangeNumber}
          />
        </View>
      </View>
    </View>
  );
}

export default ModalC;