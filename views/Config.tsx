
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../utils/getImages';
import * as ImagePicker from 'expo-image-picker';


export default function Config({ navigation }) {
  const inset = useSafeAreaInsets()
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top, backgroundColor: 'black' }}>
      <View>
        <Text>Esse é o componente CONFIG</Text>

        <Image source={images.add} resizeMode='contain' />
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});