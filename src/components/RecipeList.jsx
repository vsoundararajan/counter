import React from 'react'
import Recipe from './Recipe';

export default function RecipeList({recipes}) {
  const renderRecipes = (recipes) => {
    return recipes.map( (recipe) => {
      return ( <Recipe key={recipe.id} {...recipe} />)
    })
  }
  return (
    <div className="recipe-list">
     { renderRecipes(recipes) }
     <div className="recipe-list_add-recipe-btn-container">
      <button className="btn btn--primary">Add Recipe</button>
     </div>
    </div>
  )
}
