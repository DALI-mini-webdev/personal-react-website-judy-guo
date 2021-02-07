import React, { Component } from 'react';
import { Map } from 'immutable';
import RecipePosting from './RecipePosting';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: Map(),
            recipeID: 0,
            newRecipe: '',
            newRecipeType: '',
            newRecipePic: '',
        }
    }
    newRecipeFunction = (event) => {
        this.setState({ newRecipe: event.target.value })
    }

    newRecipeTypeFunction = (event) => {
        this.setState({ newRecipeType: event.target.value })
    }

    newRecipePicFunction = (event) => {
        this.setState({ newRecipePic: event.target.value })
    }

    saveRecipeInfo = () => {
        let RecipeData = {
            name: this.state.newRecipe,
            breed: this.state.newRecipeType,
            image: this.state.newRecipePic,
        }

        this.setState({
            recipes: this.state.recipes.set(this.state.recipeID, RecipeData),
            recipesID: this.state.recipeID + 1,
        })
    }



    render() {
        const allRecipes = this.state.recipes.entrySeq().map(
            ([id, recipe]) => {
                return (
                    <RecipePosting
                        name={recipe.name}
                        type={recipe.breed}
                        recipeURL={recipe.image}
                        key={id}
                    />
                );
            }
        );
        return (
            <div>
                <p> this is the recipe brainstorm  board </p>
                {allRecipes}
                <p>Add a recipe!</p>
                <p>Enter Name: </p>
                <input type='text' value={this.state.newRecipeName} onChange={this.newRecipeFunction} />

                <p>Enter category (main, side, dessert...):</p>
                <input type='text' value={this.state.newRecipeType} onChange={this.newRecipeTypeFunction} />

                <p>Enter pic URL:</p>
                <input type='text' value={this.state.recipeURL} onChange={this.newRecipePicFunction} />
                <button onclick={this.saveRecipeInfo}>Save</button>

            </div>
        );
    }
}

export default Recipes;
