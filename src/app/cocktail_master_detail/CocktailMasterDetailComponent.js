import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../common/HeaderComponent';
import CocktailList from '../cocktail_list/CocktailListComponent';
import Cocktail from '../cocktail/CocktailComponent';


class CocktailMasterDetail extends React.Component  {

  constructor(props) {
    super(props);
    console.log("CocktailMasterDetail.constructor");
    console.log(this.state);
    this.state = {
      currentCocktail: {},
      cocktails: [],
      currentView: props.initialView,
      showScreen:false
    };
  }


  switchToDetail = (cocktailId) => {
    console.log("CocktailMasterDetail.switchToDetail");
    console.log(this.state);
   //  console.log("pressing detail");
   this.setState({currentView:"detail",currentCocktail:cocktailId});
  };

  switchToMaster = () => {
    console.log("CocktailMasterDetail.switchToMaster");
    console.log(this.state);
   //  console.log("pressing detail");
   this.setState({currentView:"master",currentCocktail:cocktailId});
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
        <Header headerText={headerLabel} />
        {this.state.currentView=="master" ? <CocktailList switchToDetail={this.switchToDetail} /> : null }
        {this.state.currentView=="detail"  ? <Cocktail currentCocktail={this.state.currentCocktail} switchToMaster={this.switchToMaster}  /> : null }
      </View>
    );
  }
}

export default CocktailMasterDetail;
