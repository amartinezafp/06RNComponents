import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import FlatlistMenuItem from '../components/FlatlistMenuItem';
import { MenuItem } from '../intefaces/appInterfaces';




const menuItems:MenuItem[] = [
  {
    name:'Animation 101',
    Icon: 'cube-outline',
    component:'Animation101Screen'
  },
  {
    name:'Animation 102',
    Icon: 'albums-outline',
    component:'Animation102Screen'
  }
]

const HomeScreen = () => {

  const {top} = useSafeAreaInsets();

  const renderListHeader = () =>{
    return (
      <View>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    )
  }

  const itemSeparator = () =>{
    return (
      <View style={{borderBottomWidth:1,opacity:0.4,marginVertical:8}}/>
    )
  }
  return (

  

    <View style={{marginTop:top+20,flex:1,...styles.globalMargin}}>
      <FlatList 
          data={menuItems}
          renderItem={({item})=><FlatlistMenuItem menuItem={item}/>}
          keyExtractor={(item)=>item.name}
          ListHeaderComponent={()=>renderListHeader()}
          ItemSeparatorComponent={()=>itemSeparator()}
  
      />
      
    </View>
  )
}

export default HomeScreen

