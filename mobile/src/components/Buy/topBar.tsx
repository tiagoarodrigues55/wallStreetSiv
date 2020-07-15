import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Constants from 'expo-constants'

import { Feather as Icon, AntDesign } from '@expo/vector-icons'

// import { Container } from './styles';

const TopBar: React.FC = () => {
  const navigation = useNavigation()

  function handleNavigateBack(){
    navigation.goBack()
  }
  function navigateToCreatePost(){

  }
  return (
    <View style={styles.bar}>
      <Text style={styles.text}>Patrimônio: 100V$</Text>
      <Text style={styles.text}>Vivacoins: 20V$</Text>
  </View>
  )
}
const styles = StyleSheet.create({
  bar: {
    marginTop:20,
    padding:10,
    height:'10%',
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection: "row"
  },
  text:{
    fontWeight:"bold",
    fontSize:16
  }
 

})

export default TopBar;