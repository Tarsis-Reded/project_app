import React, { useEffect, useState } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import { data, rooms } from '../utils/getData';
import { images } from '../utils/getImages';
import { SelectList } from 'react-native-dropdown-select-list';
import { Modal, Alert, Pressable, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';

const OptionAdd = ( {option} ) => {
  // const {modalVisible} = props
  // const [curruntItem, setCurruntItem] = useState('')
  // const [selected, setSelected] = useState("");
  // const [on, setOn] = useState(curruntItem.on);
  // const [state, setState] = useState(curruntItem.state);
  // const [name, setName] = useState(curruntItem.title);
  // const [desc, setDesc] = useState(curruntItem.desc);

  return (
    <View style={{ justifyContent: 'center', backgroundColor: 'white', borderRadius: 15, height: 150, alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
      <View style={{ backgroundColor: 'white', borderColor: 'black', borderRadius: 20, alignSelf: 'center', alignItems: 'center', alignContent: 'center', }}>
        <View style={{ flex: 1, paddingTop: 20 , alignSelf: 'center', alignItems: 'center', alignContent: 'center', justifyContent: 'center', width: 300, height:75 }}>
        <TouchableOpacity
            onPress={() => { option('room')}}>
            <Text style={{fontSize: 19}}> ADICIONAR CÔMODO</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', borderTopWidth: 2, borderTopColor: '#404040',
       alignContent: 'center', justifyContent: 'center', width: 300, height:75 }}>
          <TouchableOpacity
            onPress={() => { option('device')}}>
            <Text style={{fontSize: 19}}> ADICIONAR DISPOSITIVO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default OptionAdd;