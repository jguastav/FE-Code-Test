import React from 'react';
import { View, Text } from 'react-native';
const CocktailItem = (props) => {
  const { cocktail } = props;
  return (
      <View>
        <Text>{cocktail.strDrink}</Text>
      </View>
    )
}
export default CocktailItem;
