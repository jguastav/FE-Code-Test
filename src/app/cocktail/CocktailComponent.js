import React, { Component } from 'react';
import { FlatList, Image, View, ScrollView, Text } from 'react-native';
import CocktailHeaderDetail from './CocktailHeaderDetailComponent';
import CocktailDetailCard from './CocktailDetailCardComponent';
import {generateIngredientLabels} from '../common/Ingredients';


class Cocktail extends Component {



  render() {

    const styles = {thumbnailStyle: {
        height: 50,
        width: 50,
      },
      headerTextStyle: {
        fontSize: 18,
      },
      headerContentStyles: {
        flexDirection: "column",
        justifyContent: "space-around",
      },
      thumbnailContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
      },
      imageStyle: {
        height: 300,
        flex: 1,
        width: null,
      },
      ingredientsContainerStyle : {
        paddingTop: 2,
        marginLeft: 2,
        height: 80,
      },
      instructionsHeadingStyle : {
        paddingTop: 20,
      },
      instructionsTextStyle: {
         paddingTop:14,
      },
    };


    const {
      thumbnailStyle,
      headerContentStyles,
      headerTextStyle,
      imageStyle,
      thumbnailContainerStyle,
      ingredientsContainerStyle,
      instructionsHeadingStyle,
      instructionsTextStyle
    } = styles;



    const cocktail=this.props.currentCocktail;



    const uri=cocktail.strDrinkThumb;
    const ingrendientsArray=generateIngredientLabels(cocktail);
    console.log("ingrendientsArray");
    console.log(ingrendientsArray);
    const ingredientsMap = ingrendientsArray.map(x => ({key: x}));


    console.log("ingrendientsMap");
    console.log(ingredientsMap);
    return (
      <View>
        <CocktailHeaderDetail headerText={cocktail.strDrink} />
        <ScrollView>
        <CocktailDetailCard>
          <Image source={{uri}}
            style={imageStyle}
            />
            <View style={ingredientsContainerStyle}>
              <FlatList
                  data={ingredientsMap}
                  renderItem={({item}) => <Text style={styles.ingredientitemStyle}>{item.key}</Text>}
                  />
            </View>
            <Text style={instructionsHeadingStyle}>{'\u2022 How to prepare'}</Text>
            <Text style={instructionsTextStyle}>{cocktail.strInstructions}</Text>

        </CocktailDetailCard>
        </ScrollView>
      </View>
    );
  }

}

export default Cocktail;
