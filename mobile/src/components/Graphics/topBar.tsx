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
      <Text style={styles.text}>Gráficos</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  bar: {
    // marginTop:20,
    // paddingTop:15,
    maxHeight:'8%',
    alignItems:"center",
  },
  text:{
    marginTop:50,

    fontWeight:"bold",
    fontSize:18
  }
 

})

export default TopBar;