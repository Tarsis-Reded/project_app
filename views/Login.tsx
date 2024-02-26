import React, { useState, useRef } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import ToggleSwitch from 'toggle-switch-react-native';
import { Modalize } from 'react-native-modalize';
import ModalDevice from '../components/modalDevice';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
interface AppProps { }


const App: React.FC<AppProps> = () => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };

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
      <>
    <View style={{flexDirection: 'row'}}>
      <View style={{ backgroundColor: 'white', flexDirection: 'column', width: 150, height: 148, borderWidth:1, borderRadius: 15, marginBottom: 8 }}>
        <Text>TESTE</Text>
        </View>
        <View style={{ backgroundColor: 'white', flexDirection: 'column', width: 150, height: 148, borderWidth:1, borderRadius: 15, marginBottom: 8 }}>
        <Text>TESTE</Text>
        </View>
        </View>


        <TouchableOpacity onPress={onOpen}>
          <Text>Open the modal</Text>
        </TouchableOpacity>

        <Modalize ref={modalizeRef}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          snapPoint={500}
          // HeaderComponent={
          //   <View>
          //     <Text>Header</Text>
          //   </View>
          // }
          withHandle={true}
          
        >
          {/* <ModalC/> */}

        </Modalize>
      </>

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

// import React, { useState, useEffect } from 'react';
// import { Alert, StyleSheet, Text, Pressable, View, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native';
// import { SelectList } from 'react-native-dropdown-select-list';
// import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
// import ToggleSwitch from 'toggle-switch-react-native';
// import ModalC from '../components/modal';


// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
// } from '@expo-google-fonts/poppins';


// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selected, setSelected] = React.useState("");
//   const inset = useSafeAreaInsets()
//   const roomsHouse = [
//     { key: '1', value: 'Sala' },
//     { key: '2', value: 'Cozinha' },
//     { key: '3', value: 'Quarto' },
//     { key: '4', value: 'Sala de Jantar' }
//   ]

//   return (

//     <View style={styles.centeredView}>
//       <ModalC open={modalVisible}/>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default App;
