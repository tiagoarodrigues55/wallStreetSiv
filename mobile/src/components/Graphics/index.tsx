import React from 'react';
import { View, StyleSheet } from 'react-native';
import Graphic from './Graphic'
import Menu from '../Menu'
import TopBar from './topBar'
// import { Container } from './styles';

const Graphics: React.FC = () => {
  return <View>
    <TopBar/>
    <View style={styles.graphics}>
    <Graphic />

    </View>
    <Menu/>
  </View>
}
const styles = StyleSheet.create({
  graphics:{
    maxHeight:'82%'
  }
})
export default Graphics;