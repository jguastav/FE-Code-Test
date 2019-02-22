import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import CocktailItem from './CocktailItemComponent';

class CocktailList extends Component {
  state = {
    cocktails:[],
  }

  handleOnPress = (cocktailId) => {
    console.log("CocktailList.handleOnPress");
    console.log(this.state);
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
      <ScrollView>
        {this.renderCocktails()}
      </ScrollView>
    );
  }
}

export default CocktailList;
