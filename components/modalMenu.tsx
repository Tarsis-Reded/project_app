import React, { useEffect, useState } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import { data, rooms } from '../utils/getData';
import { images } from '../utils/getImages';
import { SelectList } from 'react-native-dropdown-select-list';
import { Modal, Alert, Pressable, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ModalC = () => {
  // const [curruntItem, setCurruntItem] = useState(item)
  // const [selected, setSelected] = useState("");
  // const [on, setOn] = useState(curruntItem.on);
  // const [state, setState] = useState(curruntItem.state);
  // const [name, setName] = useState(curruntItem.title);
  // const [desc, setDesc] = useState(curruntItem.desc);
  const inset = useSafeAreaInsets()
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  return (
    <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top, backgroundColor: 'white', width: 230, height: windowHeight }}>

 
    </SafeAreaView>
  );
}

export default ModalC;