import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native'
import Delegation from './Delegation'
import Menu from '../Menu/index'
import TopBar from './topBar'

const Delegations = () => {
  return (
    <View style={styles.container}>
      <TopBar/>

      <View style={styles.Delegations}>
      <ScrollView
  showsVerticalScrollIndicator={false}
    
>
      <Delegation UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Delegation UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Delegation UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Delegation UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Delegation UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Delegation UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Delegation UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Delegation UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Delegation UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
      <Delegation UP={10.5} name="Tiago Rodrigues" Valorização={2.71} price={3}/>
 
    
      </ScrollView>
      </View>
     <Menu/>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
  },
  Delegations:{
    maxHeight:'77%'
  },
  topBar:{

  },
  menu:{

  }
})

export default Delegations;