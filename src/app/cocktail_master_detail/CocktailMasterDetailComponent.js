import React, { Component } from 'react';
import { View } from 'react-native';
import CocktailList from '../cocktail_list/CocktailListComponent';
import Cocktail from '../cocktail/CocktailComponent';
import axios from 'axios';

class CocktailMasterDetail extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      currentCocktail: {},
      currentCocktailId: -1,
      cocktails: [],
      currentView: props.initialView,
      showScreen:false
    };
  }


  switchToDetail = (idDrink) => {
    const url='http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+idDrink;
    axios.get(url)
      .then((response) => {
          this.setState({currentView:"detail",
              currentCocktail:response.data.drinks[0],
              currentCocktailId:idDrink});
        });

    };



  switchToMaster = () => {
    this.setState({currentView:"master",currentCocktail:null});
  };



  render() {
//    console.log("CocktailMasterDetail");
//    console.log(this.state);
    const {
      currentView,
      headerLabel,
    } = this.props;
    const showList = this.state.currentView == "master";
    const showDetail = this.state.currentView == "detail";

    console.log("CocktailMasterDetail.render");
    console.log(this.state);
    return (
      <View>
        {showList ? <CocktailList switchToDetail={this.switchToDetail} headerLabel={this.props.headerLabel} /> : null }
        {showDetail  ? <Cocktail
                  currentCocktail={this.state.currentCocktail}
                  currentCocktailId={this.state.currentCocktailId}
                  switchToMaster={this.switchToMaster}  /> : null }
      </View>
    );
  }
}

export default CocktailMasterDetail;
