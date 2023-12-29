import { Modal, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Pressable, Alert, Button } from 'react-native';

const itemRoom = ({ item, navegation}) => {

    return (
        <View style={{ backgroundColor: 'white', flexDirection: 'column', width: 150, height: 148, borderWidth: 1, borderRadius: 15, margin: 8 }}>
            <TouchableOpacity style = {{width: 130, height: 130,}}
                onPress={() => navegation.navigate('Menu', {id: 100, room: 'Sala'})}>           
           /
           ERRO

            <Text>{item.name}</Text>
            <Text>{item.countActive}</Text>
            <Text>{item.countDevices}</Text>
            </TouchableOpacity>
        </View>

    )
}


export default itemRoom;