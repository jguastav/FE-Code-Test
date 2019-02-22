import React from 'react';
import { View, Text, Image } from 'react-native';
import CocktailCard from './CocktailCardComponent';
import CocktailCardPanel from './CocktailCardPanelComponent';

const CocktailItem = (props) => {
  const { cocktail } = props;
  const {
    headerContentStyles,
    detailContentStyles,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
  } = styles;
  const uri = cocktail.strDrinkThumb;
  return (
      <CocktailCard>
        <CocktailCardPanel>
            <View style={detailContentStyles}>
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
          </CocktailCardPanel>
      </CocktailCard>
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
  detailContentStyles: {
    width: "70%",
    alignItems: 'flex-start',
    justifyContent: 'space-around',

  },
  thumbnailContainerStyle: {
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginLeft: 10,
    marginRight: 10,
  },
  textBaseStyle: {

  }
}

export default CocktailItem;
