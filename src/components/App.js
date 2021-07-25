import React, { useState, useEffect } from 'react'
import RecipeList from './RecipeList';
import recipesFromStartList from "./recipes";
import RecipeEdit from './RecipeEdit';
import "../css/app.css";
import uuid from "react-uuid";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

export default function App() {
  const [recipes, setRecipes] = useState(recipesFromStartList);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(JSON.parse(recipeJSON));
    if (recipeJSON !== null){
      setRecipes(JSON.parse(recipeJSON));
    }
  }, []);
  
  useEffect(() => {
    console.log("recipes changed", recipes);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

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

  const handleRecipeDeleteClick = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  const recipeContextValue = {
    handleRecipeAddClick,
    handleRecipeDeleteClick,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList 
        recipes={recipes} 
      />
      <RecipeEdit />
    </RecipeContext.Provider>
  )
}
