import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native'
import Action from './Action'
import Menu from '../Menu/index'
import TopBar from './topBar'

const Actions = () => {
  return (
    <View style={styles.container}>
      <TopBar/>

      <View style={styles.actions}>
      <ScrollView
  showsVerticalScrollIndicator={false}
    
>
      <Action UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Action UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Action UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Action UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Action UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Action UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Action UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Action UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Action UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Action UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
 
    
      </ScrollView>
      </View>
     <Menu/>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
  },
  actions:{
    maxHeight:'77%'
  },
  topBar:{

  },
  menu:{

  }
})

export default Actions;