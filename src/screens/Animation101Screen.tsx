import { View, Text, StyleSheet, Animated, Button } from 'react-native'
import React, { useRef } from 'react'

const Animation101Screen = () => {

  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () =>{
    Animated.timing(
        opacity,
        {
            toValue:1,
            duration:3000,
            useNativeDriver:true
        }
    ).start(()=>console.log('Animación Terminó'));
     
  }

  const fadeOut = () =>{
    Animated.timing(
        opacity,
        {
            toValue:0,
            duration:3000,
            useNativeDriver:true
        }
    ).start();
     
  }
    
    
  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.purpleBox,opacity:opacity,marginBottom:20}}/>
      <Button title="Fade In" onPress={fadeIn}/>
      <Button title="Fade Out" onPress={fadeOut}/>
    </View>
  )
}

export default Animation101Screen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
        purpleBox:{
        backgroundColor:'#5856D6',
        width:150,
        height:150
    }
});