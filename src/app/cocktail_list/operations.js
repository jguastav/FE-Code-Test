axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
  .then((response) => {
    parseString(response.data, (err, data) => {
      this.setState({ cocktails: data.drinks });
    });
});
