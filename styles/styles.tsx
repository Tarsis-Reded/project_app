import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      fontSize: 20,
      flexDirection: "row",
      alignSelf: "center"
    },
    buttonMenu: {
      width: 290,
      height: 40, 
      justifyContent: 'center', 
      alignSelf: 'center', 
      alignItems: 'center', 
      borderRadius: 9, 
      marginVertical: 5, 
      borderWidth: 1
    },
    centerRow: {
      flexDirection: "row",
      left: 38
    },
    startRow: {
      justifyContent: 'flex-start',
      alignSelf: 'center',
    },
    twoContainer: {
      flexDirection: "row",
      alignSelf: "center",
      paddingVertical: 12,
      fontFamily: 'Poppins_400Regular',
      fontSize: 18
    },
    centerColumn: {
      flexDirection: "column",
      alignSelf: "center"
    },
    dropdown1BtnStyle: {
      width: '80%',
      height: 50,
      backgroundColor: '#FFF',
      // borderRadius: 8,
      // borderWidth: 1,
      borderColor: '#444',
    },
    dropdown1BtnTxtStyle: { color: '#000000', alignSelf: "center", fontSize: 16, fontFamily: 'Poppins_400Regular' },
    dropdown1DropdownStyle: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopEndRadius: 12, borderTopStartRadius: 12 }, //
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' }, // 
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'center', fontFamily: 'Poppins_400Regular', fontSize: 16 }, // 
    font: { fontFamily: 'Poppins_400Regular', fontSize: 18, paddingVertica: 6 },
  
    dropdown2BtnStyle: { // botão principal
      width: '80%',
      height: 50,
      backgroundColor: '#e600ff',
      borderRadius: 8,
    },
  
    dropdown2BtnTxtStyle: { // texto inicial 
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  
    dropdown2DropdownStyle: { // 
      backgroundColor: '#e600ff',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
  
    dropdown2RowStyle: { backgroundColor: '#444', borderBottomColor: '#C5C5C5' },
  
    dropdown2RowTxtStyle: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    images: {
      width: 200,
      height: 200,
      resizeMode: 'contain'
    },
    imageButtonDown: {
      width: 45,
      height: 45,
      resizeMode: 'contain'
    },
    imageComponent: {
      width: 50,
      height: 50,
      resizeMode: 'contain'
    },
    imageButtonUp: {
      width: 45,
      height: 45,
      resizeMode: 'contain'
    },
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
      borderWidth: 1,
      width: 350,
      height: 600,
      shadowColor: 'black',
      // shadowOffset: {
      //   width: 0,
      //   height: 5,
      // },
      flexDirection: 'row',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 10,
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
  