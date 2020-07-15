import React from 'react'
import {NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Buy from './components/Buy'
import Sold from './components/Sold'
import Delegation from './components/Delegation'
import Graphics from './components/Graphics'
import DiscursesList from './components/DiscursesList'

const AppStack = createStackNavigator()

const Routes = () =>{
  return(
    <NavigationContainer>
      <AppStack.Navigator 
      headerMode="none"
      screenOptions={{
        cardStyle: {
        backgroundColor: '#f0f0f5'
        }
      }
      }>
        <AppStack.Screen name="Buy" component={Buy}/>
        <AppStack.Screen name="Sold" component={Sold}/>
        <AppStack.Screen name="Delegation" component={Delegation}/>
        <AppStack.Screen name="Graphics" component={Graphics}/>
        <AppStack.Screen name="DiscursesList" component={DiscursesList}/>
     
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes