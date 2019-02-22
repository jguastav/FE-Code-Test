import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import CocktailItem from './CocktailItemComponent';

class CocktailList extends Component {

  state = {
    cocktails: [],
  }

  componentWillMount() {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
      .then((response) => {
        this.setState({cocktails: response.data.drinks});
        });
    };

  renderCocktails = () => {
    return this.state.cocktails.map((cocktail) => {
      return <CocktailItem key={cocktail.idDrink} cocktail={cocktail} />;
	});
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderCocktails()}
      </ScrollView>
    );
  }
}

export default CocktailList;
