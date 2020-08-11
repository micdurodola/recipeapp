import React, {  useState,useEffect } from "react";
import Recipe from "../component/recipedata.js";


const RecipeList = () => {

    const APP_ID = "9ee3a35a"
    const  APP_KEY="3bdf1d672774d78f95045b4226c5c04e"

    const [recipes, setRecipes] = useState([]);


    useEffect(() =>{
        getRecipe();
    })


    const getRecipe = async () =>{
        const response = await fetch(`https://api.edamam.com/search?q="chicken"&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits)
    };

    
    return(
        <div>
         {recipes.map(recipe =>(<Recipe key ={recipe.recipe.label} title = {recipe.recipe.title} 
         calories = {recipe.recipe.calories}
         image = {recipe.recipe.image}
         
         />))}

        </div>

        

    );
}

export default RecipeList;