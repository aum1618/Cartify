import React from 'react'
import { Text } from '../../../../infrastructure/components/typography/Text'
import { IconButton } from 'react-native-paper'
import { HeaderContainer, HeaderRow } from './HeaderStyles'

export default function Header() {
  return (
    <HeaderContainer>
        <HeaderRow>
            <IconButton iconColor='white' />
            <Text variant="heading2" >Categories</Text>
            <IconButton icon="magnify" iconColor='white' />
        </HeaderRow>
    </HeaderContainer>
  )
}