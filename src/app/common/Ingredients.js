export const getIngredients = (baseObject) => {

  i=1;
  fin=false;
  ingredientArray = [];
  while (!fin) {
    var currentValue=baseObject["strIngredient"+i];
    if (typeof currentValue=="undefined" || currentValue==null || currentValue=="" )  {
      	fin=true;
    } else {
        ingredientArray.push(currentValue);
    }
    i++;
  }
  return ingredientArray;
};


export const getIngredientLabels = (baseObject, ingredients) => {
  var result=[];
  for (i=0; i<ingredients.length ;i++) {
    var thisLine="";
    var measureValue=baseObject["strMeasure"+i+1];
    if (typeof measureValue!="undefined" && measureValue!=null && measureValue.trim()!="") {
      thisLine = measureValue + " - "
    } else {
      thisLine = "1 - ";
    }
    thisLine+=ingredients[i];
    result.push(thisLine);
  }
  return result;
};


export const generateIngredientLabels = (baseObject) => {
  var ingredients=getIngredients(baseObject);
  var result=getIngredientLabels(baseObject,ingredients);
  return result;
};
