import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { FlatList } from 'react-native-gesture-handler'
import { colores } from '../theme/color'
import FadeInImage from '../components/FadeInImage'

const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

    const loadMore = () => {
        const newArray:number[]=[];
        for (let i = 0; i < 5; i++){
            newArray[i]=numbers.length+i;
        } 

        setTimeout(()=>{
            setNumbers([...numbers,...newArray]);
        },1500)

       
    }

    const renderItem = (item:number)=>{

        const uri=`https://picsum.photos/id/${item}/500/400`;

        return(
            <FadeInImage uri={uri}/>
        )
    }


  return (


    <View style={{flex:1,backgroundColor:'white'}}>
      <FlatList
        data={numbers}
        keyExtractor={ (item) => item.toString()}
        renderItem={({item})=>renderItem(item)}
        ListHeaderComponent={()=><HeaderTitle title="Infintie Scroll"/>}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={()=>(
            <View style={{height:150,justifyContent:'center',alignItems:'center',width:'100%'}}>
                <ActivityIndicator size={25} color={colores.primary}/>
            </View>
        )}

      />
    </View>
  )
}

export default InfiniteScrollScreen

const styles = StyleSheet.create({
    textItem:{
        backgroundColor:'green',
        height:150
    }
});