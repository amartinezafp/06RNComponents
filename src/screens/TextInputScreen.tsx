import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ScrollView } from 'react-native-gesture-handler'
import { useForm } from '../hooks/useForm'
import CustomSwitch from '../components/CustomSwitch'


const TextInputScreen = () => {


const {form, onChange, isSuscribed} = useForm({

        name: '',
        email: '',
        phone: '',
        isSuscribed:false

});


    return (
        <KeyboardAvoidingView

            behavior={Platform.OS === "ios" ? "padding" : "height"}

        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="TextInput Screen" />
                        <TextInput
                            style={styles2.inputStyle}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={styles2.inputStyle}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            keyboardAppearance='dark'

                        />

<View style={styles2.switchRow}>
        <Text style={styles2.switchText}>Suscribirse:</Text>
        <CustomSwitch isOn={isSuscribed} onChange={(value)=>onChange(value as any,'isSuscribed')}/>
      </View>

                      

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            style={styles2.inputStyle}
                            placeholder="Ingrese su teléfono"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                        />
  <View style={{ height: 100 }}></View>
                    </View>
                  
                </TouchableWithoutFeedback>

            </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default TextInputScreen

const styles2 = StyleSheet.create({
    inputStyle: {
        borderWidth: 0.5,
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        marginVertical: 5
    },
    switchRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10
      },
      switchText:{
        fontSize:25
      }
});