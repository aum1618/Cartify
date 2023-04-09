import { View} from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'
import { Text } from '../../../../infrastructure/components/typography/Text'

export default function FilterModalHeader({toggleFilterModal}) {
  return (
    <View style={{padding:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} >
        <IconButton icon="chevron-left" iconColor='white' onPress={toggleFilterModal} />
        <Text variant="heading2">Filters</Text>
        <IconButton  iconColor='white' />

    </View>
  )
}
