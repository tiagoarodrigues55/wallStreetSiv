import React, {useState, ChangeEvent, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Picker} from 'react-native'
import { RectButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

interface Props{
  price: number,
  name: string,
  UP: number,
  Valorização: number
}

const Action: React.FC<Props> = (props) =>{
  const navigation = useNavigation()

  const [multiplicator, setMultiplicator] = useState(1);
  const [price, setPrice] = useState(props.price);

 
  function handleMultiplicator(itemValue: number){
    const multiplicator = Number(itemValue)
    setMultiplicator(multiplicator)
    const price = multiplicator * props.price
    setPrice(price)
  }
  function handlePrice(){
    //redux!!
  }
  function handleNavigateToDelegation(){
    navigation.navigate('Delegation', {})
  
    }
  return (
    <View>
      <View style={styles.container} >
        <View style={styles.action}>
        <TouchableOpacity onPress={handleNavigateToDelegation}>
          <Text>Tiago Rodrigues</Text>
        </TouchableOpacity>
   

          <Picker
        selectedValue={multiplicator}
        style={{ height: 50, width: 90 }}
        onValueChange={handleMultiplicator}
      >
        <Picker.Item label="1" value={1} />
        <Picker.Item label="5" value={5} />
        <Picker.Item label="10" value={10} />
        <Picker.Item label="20" value={20} />
      </Picker>
      <RectButton style={styles.button} onPress={handlePrice}>
  <Text>{`Vender por ${price}V$`}</Text>
  </RectButton>
        </View>
        <View style={styles.userInfo}>
          <Text>{`UP: ${props.UP}pts`}</Text>
        <Text>{`Val: ${props.Valorização}V$`}</Text>
  <Text>{`Pre: ${props.price}V$`}</Text>
        

        </View>
      </View>
      <View style={styles.line}></View>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    marginRight:10,
    marginLeft:10

  },
  action:{
    justifyContent: 'space-between',
    alignItems:"center",
    flexDirection: "row",
  },
  userInfo:{
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  button:{
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'red',

  },
  line: {
    marginTop:10,
    marginBottom:10,
    width: 500,
    height:1,
    backgroundColor: 'grey'
  }
  })

export default Action
