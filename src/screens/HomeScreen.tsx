import { View, FlatList } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {menuItems} from '../data/menuItems';
import { styles } from '../theme/appTheme';
import FlatlistMenuItem from '../components/FlatlistMenuItem';
import HeaderTitle from '../components/HeaderTitle';



const HomeScreen = () => {

  const {top} = useSafeAreaInsets();

  const itemSeparator = () =>{
    return (
      <View style={{borderBottomWidth:1,opacity:0.4,marginVertical:8}}/>
    )
  }
  return (

  

    <View style={{flex:1,...styles.globalMargin}}>
      <FlatList 
          data={menuItems}
          renderItem={({item})=><FlatlistMenuItem menuItem={item}/>}
          keyExtractor={(item)=>item.name}
          ListHeaderComponent={()=>  <HeaderTitle title="Opciones de Menú"/>}
          ItemSeparatorComponent={()=>itemSeparator()}
  
      />
      
    </View>
  )
}

export default HomeScreen

