import React, { useState, useEffect, useRef } from 'react';
import { Modal, FlatList, SafeAreaView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Pressable, Alert, Button } from 'react-native';

export default function AddItem(option) {
    const handlerAddOption = (option) => { /// criar um outro componente
        // if (option == 'room') {
        //   return <AppLoading />;
        // } else {
        // }
        Alert.alert(`Adicionar ${option}`);
        // Aqui você pode fazer o que for necessário com o tipo recebido (COMODO ou DISPOSITIVO)
    };

    if (option == 'room'){
        return (
            console.log('fds', option)
        );
    }else {
        return (
            console.log('fds1', option)
        );
    }
}