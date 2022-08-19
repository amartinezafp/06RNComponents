import { View, Text, Animated } from 'react-native'
import React from 'react'
import useAnimation from '../hooks/useAnimation'

interface Props {
    uri: string
}

const FadeInImage = ({ uri }: Props) => {

    const { opacity, fadeIn } = useAnimation();

    return (
        <Animated.Image 
            source={{uri}}
            onLoadEnd={fadeIn}
            style={{
                width:'100%',
                height:400,
                opacity
            }}
        />
    )
}

export default FadeInImage