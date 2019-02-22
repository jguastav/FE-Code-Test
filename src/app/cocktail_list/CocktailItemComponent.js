import React from 'react';
import { View, Text, Image } from 'react-native';
const CocktailItem = (props) => {
  const { cocktail } = props;
  const {
    headerContentStyles,
    textContentStyles,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    textBaseStyle,
  } = styles;
  const uri = cocktail.strDrinkThumb;
  return (
      <View style={textBaseStyle}>
        <View style={textContentStyles}>
            <View style={headerContentStyles}>
              <Text style={headerContentStyles} >{cocktail.strDrink}</Text>
            </View>
            <Text style={headerContentStyles}>Ingredient 11</Text>
            <Text style={headerContentStyles}>Ingredient 2</Text>
            <Text style={headerContentStyles}>more ingredients</Text>
        </View>
        <View style={thumbnailContainerStyle}>
            <Image
              source={{ uri }}
              style={thumbnailStyle}
              />
        </View>
      </View>
    )
}

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  headerTextStyle: {
    fontSize: 18,
  },
  headerContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textContentStyles: {
    width: "70%",
    alignItems: 'flex-start',

  },
  thumbnailContainerStyle: {
    width: "30%",
    alignItems: 'flex-end',
    marginLeft: 10,
    marginRight: 10,
  },
  textBaseStyle: {
    flexDirection: 'row',
  }
}

export default CocktailItem;
