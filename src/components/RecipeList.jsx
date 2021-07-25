import React, { useContext } from 'react'
import Recipe from './Recipe';
import { RecipeContext } from "./App";

export default function RecipeList({recipes, handleRecipeDeleteClick}) {
  const { handleRecipeAddClick } = useContext(RecipeContext);
  const renderRecipes = (recipes) => {
    return recipes.map( (recipe) => {
      return ( <Recipe key={recipe.id} {...recipe} />)
    })
  }
  return (
    <div className="recipe-list">
     { renderRecipes(recipes) }
     <div className="recipe-list_add-recipe-btn-container">
      <button 
        className="btn btn--primary" 
        onClick={handleRecipeAddClick}
      >
        Add Recipe
      </button>
     </div>
    </div>
  )
}
