import React, { useState } from 'react'
import RecipeList from './RecipeList';
import recipesFromStartList from "./recipes";
import "../css/app.css";
import uuid from "react-uuid";

export default function App() {
  const [recipes, setRecipes] = useState(recipesFromStartList);

  const handleRecipeAddClick = () => {
    const newRecipe =  {
      id: uuid(),
      name: "New Recipe",
      servings: 1,
      cookTime: "1:00",
      instructions: [
        "step 1",
        "step 2",
        "eat"
      ],
      ingredients: [{
          id: uuid(),
          name: "Name",
          amount: "1 TBS"
        }
      ]
    };
    setRecipes([...recipes, newRecipe]);
  }

  const handleDeleteClick = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }
 
  return (
    <RecipeList 
      recipes={recipes} 
      handleRecipeAddClick={handleRecipeAddClick} 
      handleDeleteClick={handleDeleteClick}
    />
  )
}
