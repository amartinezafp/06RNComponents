import { View, Text, Animated, Easing } from 'react-native'
import React, { useRef } from 'react'

const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;
  
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
    
    const startMovingPosition = (initPosition: number,duration:number=300) =>{
        position.setValue(initPosition);
        Animated.timing(
            position,
            {
            toValue:0,
            duration:duration,
            useNativeDriver:true,
            // easing: Easing.bounce
        }
        ).start();
    }

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition
  }
}

export default useAnimation