import React, { useState, useEffect } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  // ingredients => list of ingredients []
  const [userIngredients, setUserIngredients] = useState([]);
  //
  const addIngredientsHandler = (ingredient) => {
    setUserIngredients((prevIngredients) => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredient },
    ]);
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
