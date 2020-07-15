import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView  } from 'react-native';

// import { Container } from './styles';
import {LineChart} from 'react-native-chart-kit'


const Graphics: React.FC = () => {
  
  return (
    <View style={styles.content}>
      <ScrollView
  showsVerticalScrollIndicator={false}
    
>
      <View style={styles.graphic}>
  <Text style={styles.title}>
    Tiago Rodrigues pontos/sessão
  </Text>
  <LineChart
    data={{
      labels: ['1ª ', '2ª ', '3ª ', '4ª ', '5ª ', '6ª '],
      datasets: [{
        data: [
          5.3, 7.2, 4.5, 3.4, 5.5, 6
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      count: 0,
      data: [],
      width: Dimensions.get('window').width,
      height: 220,
      paddingTop: 0,
      paddingRight: 0,
    }}
    bezier
    style={{
      marginVertical: 10,
      borderRadius: 16
    }}
  />
  </View>
  <View style={styles.graphic}>
  <Text style={styles.title}>
    Tiago Rodrigues preço/sessão
  </Text>
  <LineChart
    data={{
      labels: ['1ª ', '2ª ', '3ª ', '4ª ', '5ª ', '6ª '],
      datasets: [{
        data: [
          10, 12, 7.8, 9.2, 8.8, 15.3
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      count: 1,
      data: [],
      width: Dimensions.get('window').width,
      height: 220,
      paddingTop: 0,
      paddingRight: 0,
    }}
    bezier
    style={{
      marginVertical: 10,
      borderRadius: 16
    }}
  />
  </View> 
  <View style={styles.graphic}>
  <Text style={styles.title}>
    Tiago Rodrigues valorização/sessão
  </Text>
  <LineChart
    data={{
      labels: ['1ª ', '2ª ', '3ª ', '4ª ', '5ª ', '6ª '],

      datasets: [{
        data: [
          0.5, 1.2, 0.7, 1.3, 2.2, 3.3
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      count: 2,
      data: [],
      width: Dimensions.get('window').width,
      height: 220,
      paddingTop: 0,
      paddingRight: 0,
    }}
    bezier
    style={{
      marginVertical: 10,
      borderRadius: 16
    }}
  />
  </View>
  </ScrollView>
</View>
  )
}
 const styles = StyleSheet.create({
   content:{
    marginTop:40,
   },
   graphic:{
     marginVertical:10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
   },
   title:{
    fontSize: 20,
    fontWeight:'bold'
   }
 })
export default Graphics;