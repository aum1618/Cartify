import { Image, View } from 'react-native';
import React from 'react';
import { Text } from '../../../../infrastructure/components/typography/Text';
import { CardContainer, CardImage, LeftContainer, RightContainer } from './CategoryCardStyles';

export default function CategoryCard({category}) {
  return (
    
      <CardContainer>
        <LeftContainer>
            <Text variant="heading2" >{category.length > 12
                ? category.slice(0, 12) + "..."
                : category}</Text>
        </LeftContainer>
        <RightContainer>
            <CardImage source={{
          uri: `https://source.unsplash.com/random/?${category}/`,
        }} />
        </RightContainer>
        </CardContainer>
      
    
  );
}
