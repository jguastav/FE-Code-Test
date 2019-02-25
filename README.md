# Code Challenge

## Instructions:

Please clone the repository, complete the exercise, and submit a PR for us to review! If you have any questions, you can reach out directly here or leave comments on your pull request which we will respond to. Remember, all instructions for running the application (including installing relevant libraries, etc.) should be included in the README. Thank you and looking forward to seeing your great work!

## Overview:

Implement a simple mobile cocktails catalogue (master / detail). The catalogue consists of a table view list of cocktails with their name, toppings and photo. Once the user taps on a specific row it will push a new screen with that drink’s details: Name, Photo, Ingredients and Preparation.

## Features:

**1. Cocktails list:**

For each row of the list it will display the Cocktail name and photo (See wireframe 1).
The API endpoint that should be consumed for this purpose is:

http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass

This returns a JSON list of cocktails, and the information needed in order to populate each row of the list.

```
{
 	strDrink,           → Cocktail name
     	strDrinkThumb,  → Photo URL
      	idDrink       → Cocktail ID
}
```

Wireframe 1:

![screen shot 2018-02-02 at 12 53 57](https://user-images.githubusercontent.com/263229/35742087-40b1ce26-0818-11e8-91d7-5c2ea0d4a6aa.png)




**2. Cocktail detail:**

Once the user taps on a row from the list mentioned in the previous feature it will push a new screen with the selected cocktail’s details, where it will show it’s name, photo, ingredients and instructions (See wireframe 2)

The endpoint to be used for this is the following:

http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink} → Cocktail ID
I.g.: http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16108

The endpoint returns a JSON with the cocktails info, the needed properties are:
```
{
	strInstructions,  → instructions
	strDrink,         → cocktail name
	strDrinkThumb,    → photo URL
	strIngredient1,   → ingredient 1
	...
	strIngredientN    → ingredient N
}
```

Wireframe 2

![screen shot 2018-02-02 at 12 53 37](https://user-images.githubusercontent.com/263229/35742155-63205b1c-0818-11e8-8b4b-608a46eaa718.png)




**3. Bonus Points: (Optional)**

Implement a filter by name functionality on the first screen that automatically filters the results while typing, only showing the rows that satisfy the criteria entered by the user.


## Delivery Steps:

1. Create a branch from `master` named `base` and push all the third-party code needed (Libraries, Frameworks, etc.).
2. Create a branch from `base` named `code-test` and push your own code (Remember to update the Readme file providing any instructions on how to run the project if needed).
4. Create a Pull Request from `code-test` to `base` for us to review.

Thank you and good luck!


## Questions:

A) Describe the strategy used to consume the API endpoints and the data management.

I've not used any strategy but get the list and the detail. I need the detail in order to get the 2 first ingredients of each drink. I've used axios to consume endpoints. I've also used redux-thunk to allow action creators return functions and deal with async calls. 

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

I didn't use react native navigation. I could be used it in order to make easier the development.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?

I've got the first list using an axios call. That gave me the drink summary list. To get the first 2 ingredients I've used
an array of promises to get All the data and extract the 2 first ingredients and count the rest of them.
In a real world I would only get the detail of visible elements and refresh while navigating on them.
In a real world I would suggest to change the endpoints to get only the data we need to show.

D) Would you like to add any further comments or observations?
