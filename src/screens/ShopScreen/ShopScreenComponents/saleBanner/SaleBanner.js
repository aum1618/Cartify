import { View,} from 'react-native'
import React from 'react'
import { Text } from '../../../../infrastructure/components/typography/Text'
import { SaleBannerContainer } from './SaleBannerStyles'


export default function SaleBanner() {
  return (
    <SaleBannerContainer>
      <Text variant="heading2">SUMMER SALES</Text>
      <Text variant="body" >Upto 50% Off</Text>
    </SaleBannerContainer>
  )
}