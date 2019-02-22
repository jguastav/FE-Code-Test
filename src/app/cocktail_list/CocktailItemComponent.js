import React from 'react';
import { View, Text, Image,FlatList } from 'react-native';
import CocktailCard from './CocktailCardComponent';
import CocktailCardPanel from './CocktailCardPanelComponent';

const CocktailItem = (props) => {

  const { cocktail, onPress} = props;
  const {
    headerContentStyles,
    detailContentStyles,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    ingredientitemStyle,
    ingredientsContainerStyle,
  } = styles;
  const uri = cocktail.strDrinkThumb;

  return (


      <CocktailCard>
        <CocktailCardPanel onPress={() => onPress(cocktail.idDrink)} >
            <View style={detailContentStyles}>
                <View style={headerContentStyles}>
                <Text style={headerContentStyles} >{cocktail.strDrink}</Text>
                <View style={ingredientsContainerStyle}>
                  <FlatList
                      data={[
                        {key: 'Ingredient 1'},
                        {key: 'Ingredient 2'},
                      ]}
                      renderItem={({item}) => <Text style={styles.ingredientitemStyle}>{`\u2022 ${item.key}`}</Text>}
                      />
                  <Text style={ingredientitemStyle}>more ingredients</Text>
                </View>
                </View>
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
    height: 90,
    width: 90,
  },
  headerTextStyle: {
    fontSize:32,
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
    marginLeft: 2,
    marginRight: 2,
  },
  ingredientsContainerStyle: {
    paddingTop: 2,
    marginLeft: 2,
    height: 80,
  },
  ingredientitemStyle: {
    fontSize: 14,
    },
}

export default CocktailItem;
