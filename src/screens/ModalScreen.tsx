import { View, Text, Button,Modal } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const ModalScreen = () => {

    const [isVisible, setIsvisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen"/>
      <Button 
      title='Abrir Modal'
      onPress={()=>setIsvisible(true)}
      />

    <Modal
        animationType='fade'
        visible={isVisible}
        transparent={true}
    >
        <View style={{backgroundColor:'rgba(0,0,0,0.5)',flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{
                backgroundColor:'white',width:200,height:200,borderRadius:8,justifyContent:'center',alignItems:'center',
                shadowOffset:{
                    width:0,
                    height:10
                },
                shadowOpacity:0.25,
                elevation:10
                }}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Modal</Text>
            <Text style={{fontSize:16,fontWeight:'300',marginBottom:20}}>Cuerpo del Modal</Text>
            <Button title='Cerrar' onPress={()=> setIsvisible(false)}/>
            </View>
        </View>
    </Modal>

    </View>
  )
}

export default ModalScreen