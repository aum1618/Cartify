import React from 'react'
import { Text } from '../../../../infrastructure/components/typography/Text'
import { IconButton } from 'react-native-paper'
import { HeaderContainer, HeaderRow } from './HeaderStyles'

export default function Header({navigation,category}) {
  return (
    <HeaderContainer>
        <HeaderRow>
            <IconButton icon="chevron-left" iconColor='white' onPress={()=>navigation.goBack()} />
            <Text variant="heading2" >{category}</Text>
            <IconButton icon="magnify" iconColor='white' />
        </HeaderRow>
    </HeaderContainer>
  )
}