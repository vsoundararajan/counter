import React from 'react'
import IngredientsList from "./IngredientsList";

export default function Recipe(props) {
  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
    handleDeleteClick
  } = props;
  console.log("recipe id = ", id);
  const getInstructions = (instructions) => {
    return instructions.map( (instruction, index) => {
      return <li key={index} >{instruction}</li>
    })
  }

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div className="recipe__action__buttons">
          <button className="btn btn--primary mr-1">Edit</button>
          <button className="btn btn--danger" onClick={() => handleDeleteClick(id)}>Delete</button>
        </div>
        <div className="recipe_row">
          <span className="recipe__label">Cook Time:</span>
          <span className="recipe__value">{cookTime}</span>
        </div>
        <div  className="recipe_row">
          <span className="recipe__label">Servings:</span>
          <span className="recipe__value">{servings}</span>
        </div>
        <div className="recipe_row">
          <span  className="recipe__label">Instructions:</span>
          <div className="recipe__value">
            <ul>
              { getInstructions(instructions) }
            </ul>
          </div>
        </div>
      </div>
      <IngredientsList ingredients={ingredients} />
    </div>
  )
}
