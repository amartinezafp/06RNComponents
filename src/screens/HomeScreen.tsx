import { View, FlatList } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {menuItems} from '../data/menuItems';
import { styles } from '../theme/appTheme';
import FlatlistMenuItem from '../components/FlatlistMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';



const HomeScreen = () => {

  const {top} = useSafeAreaInsets();

  
  return (

  

    <View style={{flex:1,...styles.globalMargin}}>
      <FlatList 
          data={menuItems}
          renderItem={({item})=><FlatlistMenuItem menuItem={item}/>}
          keyExtractor={(item)=>item.name}
          ListHeaderComponent={()=>  <HeaderTitle title="Opciones de Menú"/>}
          ItemSeparatorComponent={()=><ItemSeparator/>}
  
      />
      
    </View>
  )
}

export default HomeScreen

