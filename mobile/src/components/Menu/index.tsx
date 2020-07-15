import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Feather as Icon, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
// import { Container } from './styles';

const Menu: React.FC = () => {
  const navigation = useNavigation()
  function handleNavigateToDiscursesList(){
    navigation.navigate('DiscursesList', {})
  }
  function handleNavigateToGraphics(){
    navigation.navigate('Graphics', {})
  }
  function handleNavigateToBuy(){
  navigation.navigate('Buy', {})
  }
  function handleNavigateToSold(){
  navigation.navigate('Sold', {})
  }
  return (
  <View style={styles.container}>
  <TouchableOpacity onPress={handleNavigateToGraphics}>
    <AntDesign name="linechart" size={44} color="black" />
  </TouchableOpacity>
  <TouchableOpacity  onPress={handleNavigateToSold}>
    <MaterialCommunityIcons name="coin" size={44} color="red"/>
  </TouchableOpacity>  
  <TouchableOpacity  onPress={handleNavigateToBuy}>
    <MaterialCommunityIcons name="coin" size={44} color="green"/>
  </TouchableOpacity>
  <TouchableOpacity onPress={handleNavigateToDiscursesList}>
    <AntDesign name="bars" size={44} color="black"/>
  </TouchableOpacity>
 

  </View>
  )
}
const styles = StyleSheet.create({
  container:{
     height:'10%',
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection: "row",
    paddingHorizontal:15
  }
})
export default Menu;