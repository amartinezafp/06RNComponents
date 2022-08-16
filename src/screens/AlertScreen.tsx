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
  

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts'/>
      <Button title="Mostrar Alerta"
      onPress={showAlert}
      /> 
    </View>
  )
}

export default AlertScreen