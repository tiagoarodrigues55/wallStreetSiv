import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import TopBar from './topBar'
// import { Container } from './styles';

const Delegation: React.FC = () => {
  return (
    <View style={styles.container}>
      <TopBar/>
      <View style={styles.Delegation}>
        <View style={styles.viewName}>
          <Text style={styles.name}>Tiago Rodrigues</Text>
        </View>
        <View style={styles.infos}>
          <Text>Total de pontos: 25.5pts</Text>
          <Text>Última pontuação: 7.5pts</Text>
          <Text>Valorização: 2.5pts</Text>
        </View>
        <Image source={require('../../assets/grafico1.png')} style={styles.image}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    marginRight:10,
    marginLeft:10

  },
  Delegation:{
  },
  name: {
    fontSize:27,
    fontWeight:"bold"
  },
  viewName:{
    alignItems:"center"
  },
  image:{
    width: "100%"
  },
  infos:{
    marginTop:10,
    marginBottom:10
  }
  
  })

export default Delegation;