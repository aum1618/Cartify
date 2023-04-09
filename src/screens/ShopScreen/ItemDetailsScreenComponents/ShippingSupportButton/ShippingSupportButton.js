
import { View} from 'react-native'
import React from 'react'
import { Text } from '../../../../infrastructure/components/typography/Text'
import { IconButton } from 'react-native-paper'

export default function ShippingSupportButton({title}) {
  return (
    <View
    style={{
      flexDirection: "row",
      paddingHorizontal: 20,
      paddingVertical: 10,
      justifyContent: "space-between",
      alignItems: "center",
      borderWidth: 0.4,
      borderBottomColor: "#ABB4BD",
      borderTopColor: "#ABB4BD",
    }}
  >
    <Text variant="title">{title}</Text>
    <IconButton icon="chevron-right" iconColor="white" />
  </View>
  )
}