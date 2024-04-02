
import React, {  } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Config({navigation})
{
    const inset = useSafeAreaInsets()

    return(
      <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top }}>
         <View>
            <Text>Esse é o componente CONFIG</Text>
            <Button
                    title='Ir para Menu'
                    onPress={() => navigation.navigate('Menu',{
                    id: 100
                })}
            />

            <Button
                        title='Ir para Login'
                        onPress={() => navigation.navigate('Login',{
                        id: 110
                    })}
                />
        </View>
      </SafeAreaView>
    );
}