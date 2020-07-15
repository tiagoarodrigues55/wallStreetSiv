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

  return (
    <View style={styles.bar}>
    <TouchableOpacity onPress={handleNavigateBack}>
    <Icon name="arrow-left" size={30} color="black" />
  </TouchableOpacity>
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