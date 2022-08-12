import { View, Text, StyleSheet, Animated, Button, Easing } from 'react-native'
import React, { useRef } from 'react'
import useAnimation from '../hooks/useAnimation'

const Animation101Screen = () => {

  const {opacity,position,fadeIn,fadeOut,startMovingPosition} = useAnimation();
    
  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.purpleBox,opacity:opacity,marginBottom:20,transform:[{
        translateX:position}
      ]}}/>
      <Button title="Fade In" onPress={()=>{
        fadeIn();
        startMovingPosition(100);
      }}/>
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