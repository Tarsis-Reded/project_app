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

const renderItem = ({ item }) => {
    let imagePath;
    let title = item.title;
    let ind = 0;
    switch (item.type) {
      case 'socket':
        imagePath = item.state ? socket_on : socket_off
        break;
      case 'air':
        imagePath = item.state ? air_on : air_off
        break;
      case 'light':
        imagePath = item.state ? light_on : light_off
        break;
      case 'fan':
        imagePath = item.state ? fan_on : fan_off
        break;
      case 'computer':
        imagePath = item.state ? computer_on : computer_off
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
              const updatedDevices = [...devices];
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
            //   renderModal(item)
              // setModalVisible(true) 
            }}>
            <Image source={require('../assets/Images/edit.png')} style={{ width: 45, height: 30, resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }