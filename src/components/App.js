import React from 'react'
import RecipeList from './RecipeList';
import recipes from "./recipes";
import "../css/app.css";

export default function App() {
  return (
    <RecipeList recipes={recipes} />
  )
}
