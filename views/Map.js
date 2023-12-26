import React, {  } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Map({navigation})
{
    const inset = useSafeAreaInsets()

    return(
      <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top, ...styles.container }}>
         <View>
            <Text style={{fontSize: 50}}>MAP</Text>
            <Button
                    title='Ir para Menu'
                    onPress={() => navigation.navigate('Menu',{
                    id: 100
                })}
            />

            <Button
                        title='Ir para Home'
                        onPress={() => navigation.navigate('Home',{
                        id: 110
                    })}
                />
        </View>
      </SafeAreaView>
    );
}

// import React, {  } from 'react';
// import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
// import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
// import AppLoading from 'expo-app-loading';
// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
// } from '@expo-google-fonts/poppins';

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <Application />
//     </SafeAreaProvider>
//   );
// }

// export function Application({navigation}) {
//   let [fontsLoaded] = useFonts({
//     Poppins_400Regular,
//     Poppins_500Medium,
//   });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   } else {

//     const inset = useSafeAreaInsets()

//     return (
//       <SafeAreaView style={{ padding: 10, paddingBottom: 10, paddingTop: inset.top, ...styles.container }}>
//          <Text>Esse é o componente Home</Text>
//                 <Button
//                         title='Ir para Login'
//                         onPress={() => navigation.navigate('Login',{
//                         id: 30
//                     })}
//                 />
//       </SafeAreaView>
//     );
//   }
// };

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
