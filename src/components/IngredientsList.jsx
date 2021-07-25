import React from 'react'
import Ingredient from './Ingredient';

export default function IngredientsList(props) {
  const {ingredients} = props;
  const ingredientsList = ingredients => ingredients.map(
    (ingredient) => <Ingredient key={ingredient.id} {...ingredient} />
  )
  return (
    <>
      <h3>Ingredients:</h3>
      <ul>
        {ingredientsList(ingredients)}
      </ul>
    </>
  )
}
