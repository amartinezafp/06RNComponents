import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MenuItem } from '../intefaces/appInterfaces'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { colores } from '../theme/color'

interface Props {
    menuItem:MenuItem
}

const FlatlistMenuItem = ({menuItem}:Props) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate(menuItem.component as any)}>
    <View style={styles.container}>
        <Icon name={menuItem.Icon} color="#5856D6" size={23}/>
    <Text style={styles.itemText}>{menuItem.name}</Text>
    <View style={{flex:1}}/>
    <Icon name="chevron-forward-outline" color={colores.primary} size={23} />
  </View>
  </TouchableOpacity>
  )
}

export default FlatlistMenuItem

const styles = StyleSheet.create({

    container:{
        flexDirection:'row'
    },
    itemText:{
        marginLeft:5,
        fontSize:19
    }

});