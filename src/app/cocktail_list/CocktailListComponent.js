import React, { Component } from 'react';
import { View,ScrollView } from 'react-native';
import axios from 'axios';
import CocktailItem from './CocktailItemComponent';
import CocktailHeaderList from './CocktailHeaderListComponent';

class CocktailList extends Component {
  state = {
    cocktails:[],
  }

  handleOnPress = (cocktailId) => {
    this.props.switchToDetail(cocktailId);
  };


  componentWillMount() {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
      .then((response) => {
        this.setState({cocktails: response.data.drinks});
        });
    };

  renderCocktails = () => {
    return this.state.cocktails.map((cocktail) => {
      return <CocktailItem key={cocktail.idDrink} cocktail={cocktail} onPress={this.handleOnPress} />;
	});
  }

  render() {
    console.log("CocktailList.render");
    console.log(this.state);
    return (
      <View>
      <CocktailHeaderList headerText={this.props.headerLabel} />
      <ScrollView>
        {this.renderCocktails()}
      </ScrollView>
      </View>
    );
  }
}

export default CocktailList;
