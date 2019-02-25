import React, { Component } from 'react';
import CocktailMasterDetail from './CocktailMasterDetailComponent';
import axios from 'axios';
import { ViewMode } from '../common/actionCreators'

class CocktailMasterDetailContainer extends Component  {

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
          this.setState({currentView:ViewMode.DETAIL,
              currentCocktail:response.data.drinks[0],
              currentCocktailId:idDrink});
        });

    };



  switchToMaster = () => {
    this.setState({currentView:ViewMode.MASTER,currentCocktail:null});
  };



  render() {
    const {
      currentView,
      headerLabel,
    } = this.props;

    return (
      <CocktailMasterDetail
        switchToDetail={(idDrink) => {this.switchToDetail(idDrink)}}
        switchToMaster = {this.switchToMaster}
        currentView={this.state.currentView}
        headerLabel={headerLabel}
        currentCocktail = {this.state.currentCocktail}
        currentCocktailId = {this.state.currentCocktailId}
        />
    );
  }
}

export default CocktailMasterDetailContainer;
