import { Modal, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Pressable, Alert, Button } from 'react-native';


const itemRoom = (item, {navigation}) => {
    console.log("sdnbajsd", item)
    console.log("sdnbajsd", navigation)
    
    return (
        <View style={{ backgroundColor: 'white', flexDirection: 'column', width: 150, height: 148, borderWidth: 1, borderRadius: 15, margin: 8 }}>
            <Button
        title='Ir para Menu'
        onPress={() => navigation.navigate('Menu', {
          id: 100, room: 'Sala'
        })}
      />
            {/* <TouchableOpacity style = {{width: 130, height: 130,}}
                onPress={() => navegation.navigate('Menu', {id: 100, room: 'Sala'})}>           
            <Text>{item.name}</Text>
            <Text>{item.countActive}</Text>
            <Text>{item.countDevices}</Text>
            </TouchableOpacity> */}
        </View>

    )
}


export default itemRoom;