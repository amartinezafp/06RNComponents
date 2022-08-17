import { View, Text, Button, Alert} from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const AlertScreen = () => {

    const showAlert = () =>{
        Alert.alert(
            "Título",
            "Cuerpo de la Alerta",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "destructive"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {cancelable:true,
            onDismiss:()=>console.log('Dismissed')}
          );
    }
  
    const showPrompt = () =>{
        Alert.prompt(
            '¿Está Seguro?',
            'Esta acción no se puede revertir',
            (valor:String) => console.log('info: ',valor),
            'plain-text',
            'Hola Mundo',
            'number-pad'
          );
    }
     

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts'/>
      <Button title="Mostrar Alerta"
      onPress={showAlert}
      /> 
      <View style={{height:10}}></View>
      <Button title="Mostrar Prompt"
      onPress={showPrompt}
      /> 
    </View>
  )
}

export default AlertScreen