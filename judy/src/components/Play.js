import '../App.css'
import React from 'react';
import Recipes from './Recipes.js'

const Play = (props) => {
    return(
        <div>
        <header className= "App-header1">
            <p>Work hard, play hard!</p>
        </header>

        <header className= "App-main-body">
            <Recipes/>
        </header>
        </div>
    )
}

export default Play