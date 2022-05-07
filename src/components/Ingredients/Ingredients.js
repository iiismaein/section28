import React, { useState, useEffect } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  // ingredients => list of ingredients []
  const [userIngredients, setUserIngredients] = useState([]);
  //
  const addIngredientsHandler = (ingredient) => {
    fetch(
      'https://section28-7275d-default-rtdb.firebaseio.com/ingredients.json',
      {
        method: 'POST',
        //convert js object to json
        body: JSON.stringify({ ingredient }),
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((response) => {
        //convert from json to js Code
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  const removeIngredientsHandler = (ingredientId) => {
    setUserIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
    );
  };

  return (
    <div>
      <IngredientForm onAddIngredient={addIngredientsHandler} />
      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientsHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
