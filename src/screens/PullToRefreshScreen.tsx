import { View, Text,ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'


const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () =>{

        setRefreshing(true);
        setTimeout(()=>{
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola Mundo');
        },3500)

    }

  return (
    <ScrollView
        refreshControl={
            <RefreshControl 

                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={10}
                progressBackgroundColor="#5856D6"
                colors={['white','red','orange']}
                style={{backgroundColor:"#5856D6"}}
                tintColor='white'
                title="Refreshing"
                titleColor="white"

            />
        }
    >
    <View style={styles.globalMargin} >
      <HeaderTitle title="Pull to Refresh"/>
      {
        data && <HeaderTitle title={data}/>
      }
    </View>
    </ScrollView>
  )
}

export default PullToRefreshScreen