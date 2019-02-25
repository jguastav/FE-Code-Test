import React from 'react';
import { Text,View,Image,TouchableOpacity } from 'react-native';



const styles = {
  viewStyle: {
    backgroundColor: '#00C1D3',
  //  alignItems: 'center',
    height: 40,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection: 'column',
  },
  textStyle: {
    fontSize: 20,
    color:"white",
    alignSelf:"center",
  },
  imageStyle: {
    height: 40,
    width: 36,
    alignSelf:"flex-start",
    position: "absolute",
  }
};

const CocktailHeaderDetail = (props) => {




  const { textStyle, viewStyle, imageStyle } = styles;
  const {onPress, headerText} = props;
  return (
      <View style={viewStyle}>
      <TouchableOpacity onPress={ () => props.onPress()}  style={imageStyle} >
        <Image  style={imageStyle} source={require('../assets/images/baseline_arrow_back_white_36dp.png')} />
      </TouchableOpacity>
        <Text style={textStyle}>
          {headerText}
        </Text>
      </View>
  );
};
export default CocktailHeaderDetail;
