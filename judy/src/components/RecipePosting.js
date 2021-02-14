import React, { Component } from 'react';

class RecipePosting extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>{this.props.recipe} {this.props.type}</p>
                <img src= { this.props.recipeURL } alt='Image'/>
            </div>
        );
    }
}

export default RecipePosting;