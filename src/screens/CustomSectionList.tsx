import { View, Text, SectionList } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import ItemSeparator from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    }
];

const CustomSectionList = () => {

 

  return (
    <View style={styles.globalMargin}>
      {/* <HeaderTitle title="Section List"/> */}

      <SectionList 
        sections={casas}
        ListHeaderComponent={()=> <HeaderTitle title="Section List"/>}
        keyExtractor={(item,index)=>item +index}
        renderItem={({item})=><Text>{item}</Text>}
        renderSectionHeader={({section})=>(
            <View style={{backgroundColor:'white'}}>
                <HeaderTitle title={section.casa}/>
            </View>
        )}
        ItemSeparatorComponent={()=><ItemSeparator/>}
        stickySectionHeadersEnabled
        ListFooterComponent={()=> (
            <View style={{marginBottom:70}}>
                <HeaderTitle title={'Total de Casas: ' + casas.length}/>
            </View>
            
        )}
        renderSectionFooter={({section})=>(
            <HeaderTitle title={'Total: '+section.data.length}/>
        )}
        // SectionSeparatorComponent={()=><ItemSeparator/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CustomSectionList