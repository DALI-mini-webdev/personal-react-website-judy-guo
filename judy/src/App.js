import logo from './logo.svg';
import './App.css';
// import React from 'react';
import Navbar from './components/Navbar/Navbar';
import brioche from './pics/brioche.JPG';
import canoeing from './pics/canoeing.jpeg';
import cinbns from './pics/cin buns.jpeg';
import hiking from './pics/hiking.jpeg';
import painting from './pics/painting.jpeg';
import strawbcake from './pics/strawb cake.jpeg';
import walk from './pics/walk.jpeg';
import Recipes from './components/Recipes'
import RecipesPage from './components/RecipesPage'
import Stuff from './components/Stuff'
import React, { Component } from 'react';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {renderPage: 0}
  }

  changePage = (pageNumber) => {
    this.setState ({
      renderPage: pageNumber
    })
  }
  onChangeFunction = (event) => {
    console.log(event.target.value);
  }
  
  buttonFunctionGit = () => {
    window.open("https://github.com/judy-guo")
    console.log("the 'explore my github' button was clicked");
  }
  buttonFunctionVSCO = () => {
    window.open("https://vsco.co/juds-foods/gallery")
    console.log("the 'explore my vsco' button was clicked");
  }
 
  
  activityList = ["hiking", "canoeing", "procrasti-baking"];
 
  // activityMap = activityList.map((activity) => {
  //   return(
  //     <p>I enjoy {activity}.</p>
    

 
  render() {
    const welcome = function() {  
      alert("WELCOME!! Please disregard any broken functionalities (e.g. you have to click OK twice to close this pop-up and my Recipe Ideas and Stuff pages don't render yet)! They will be fixed soon, hopefully by your next visit :) ");
    }
   
    setTimeout(welcome, 800);

    
    return (
      <div>
      <div className="App">
        <Navbar />
        <button onClick = {() => {this.changePage(0)}}>Recipe Ideas</button>
        <button onClick = {() => {this.changePage(1)}}>Stuff</button>
        {
          this.state.renderPage = 0 ? <RecipesPage/> : <Stuff/>
        }
  
      </div>
  
      <div>
        <header className= "App-header">
          <p>
            <br></br>
            Judy Guo +
            <br></br>
            {/* <input type="text" onChange={onChangeFunction}/> */}
            
 
          </p>
        </header>
      </div>
  
      <div>
        <header className= "App-header1">
          <p>+ About Me</p>
          
        </header>
        <header className= "App-body">
          <p>I’m a ‘24 from Hanover, NH.</p>
          <img src={walk} width="252" height="336"/>
          <img src={hiking} width="252" height="336"/>
          <img src={canoeing} width="252" height="336"/>
          <br></br>
       
          <button onClick={this.buttonFunctionGit}>+ Explore my GitHub</button>
  
    
        </header>
        <header className="App-body">  
          <br></br>
          {/* <div>{this.activityMap}</div> */}
          <img src={strawbcake} width="142" height="189"/> 
          <img src={brioche} width="152" height="189"/> 
          <img src={cinbns} width="200" height="189"/>
          <br></br>
          <button onClick={this.buttonFunctionVSCO}>+ Explore my VSCO</button>
          {/* <Recipes />  */}
       </header>
      
      </div>
  
    </div>
    );
  }
  
 
  


}
export default App;

/** TO-DO JUDY
 * hamburger icon import
 * how to get return from activity map
 * recipes board
 * recipe ideas/stuff pages
 */
