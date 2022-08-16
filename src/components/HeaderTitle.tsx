import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/color';


interface Props {
    title:string;
  }

const HeaderTitle = ({title}:Props) => {

    const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop:top+20, marginBottom:20}}>
    <Text style={{...styles.title,color:colores.primary}}>{title}</Text>
  </View>
  )
}

export default HeaderTitle