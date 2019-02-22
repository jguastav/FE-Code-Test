import React, { Component } from 'react';
import { Image, View, ScrollView, Text } from 'react-native';
import CocktailHeaderDetail from './CocktailHeaderDetailComponent';
import CocktailDetailCard from './CocktailDetailCardComponent';


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
      }}


    const {
      thumbnailStyle,
      headerContentStyles,
      headerTextStyle,
      imageStyle,
      thumbnailContainerStyle,
    } = styles;



    const cocktail=this.props.currentCocktail;
    console.log("render cocktail" );

    const uri=cocktail.strDrinkThumb;
    console.log(cocktail.strDrinkThumb );
    return (
      <View>
        <CocktailHeaderDetail headerText={cocktail.strDrink} />
        <CocktailDetailCard>
          <Image source={{uri}}
            style={imageStyle}
            />
        </CocktailDetailCard>
      </View>
    );
  }





}

export default Cocktail;
