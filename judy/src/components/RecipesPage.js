import React, { Component } from 'react';
import Recipes from '/Users/Jiayu/personal-react-website-judy-guo/judy/src/components/Recipes.js'
import '/Users/Jiayu/personal-react-website-judy-guo/judy/src/components/Projects.css'

class RecipesPage extends Component {

    render() {
        return(
        <div>
        <header className= "Projects-bodymain">
        <Recipes />
        </header>
      </div>
    )
}
}
export default RecipesPage