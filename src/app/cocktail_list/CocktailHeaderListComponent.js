import React from 'react';
import { Text,View,Image } from 'react-native';

const style = {
  viewStyle: {
    backgroundColor: '#00C1D3',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 40,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',


    flexDirection: 'column',justifyContent:"center"
  },
  textStyle: {
    fontSize: 20,
    color:"white",
    alignSelf:"center",
    position:"absolute"
  },
  imageStyle: {
    height: 36,
    width: 36,
    alignSelf:"flex-end",
    position: "absolute"
  }

};












const CocktailHeaderList = (props) => {
  const { textStyle, viewStyle, imageStyle } = style;
  return (
      <View style={viewStyle}>
        <Text style={textStyle}>
          {props.headerText}
        </Text>
        <Image style={imageStyle} source={require('../assets/images/baseline_search_white_36dp.png')} />
      </View>
  );
};
export default CocktailHeaderList;
