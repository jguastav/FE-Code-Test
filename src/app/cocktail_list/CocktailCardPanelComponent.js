import React from 'react';
import { TouchableOpacity } from 'react-native';
  const CocktailCardPanel = (props) => {
    const { onPress } = props;


  return (
    <TouchableOpacity
        style={styles.containerStyle}
        onPress={onPress}>
      {props.children}
    </TouchableOpacity>
  )
}
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
}
export default CocktailCardPanel;
