import { View, Text, Switch, Platform, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

const SwitchScreen = () => {

  const [state, setstate] = useState({
    isActive:true,
    isHungry:false,
    isHappy:true
  })

  const onChange = (value:boolean,field: keyof typeof state) =>{
    setstate({
      ...state,
      [field]:value
    })
  }

  return (
    <View style={{marginHorizontal:20}}>
      <HeaderTitle title="Switches"/>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch isOn={true} onChange={(value)=>onChange(value,'isActive')}/>
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch isOn={true} onChange={(value)=>onChange(value,'isHungry')}/>
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch isOn={true} onChange={(value)=>onChange(value,'isHappy')}/>
      </View>
    

    <Text style={styles.switchText}>
      {JSON.stringify(state,null,5)}
    </Text>

    </View>
  )
}

export default SwitchScreen

const styles = StyleSheet.create({
    switchText:{
      fontSize:25
    },
    switchRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:10
    }
});