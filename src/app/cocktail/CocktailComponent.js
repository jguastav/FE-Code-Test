import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

class Cocktail extends Component {


  constructor(props) {
    super(props);
    const {currentCocktail} = props;
  }

  state = {
    currentCocktail: {},
    currentView: "detail",
  }


  render() {
    console.log("Cocktail.render");
    console.log(this.state);
    return (
      <ScrollView>
        <Text>Hello Cocktail Detail</Text>
      </ScrollView>
    );
  }
}

export default Cocktail;
