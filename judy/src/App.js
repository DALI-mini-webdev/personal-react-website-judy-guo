import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro'
import Work from './components/Work'
import Play from './components/Play'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currPage: "Home"}
  }

  changeCurrPage = (newCurrPage) => {
    this.setState ({
      currPage: newCurrPage
    })
  }
  
  renderPage = () => {
    if(this.state.currPage === "Work") {
      return <Work/>
    }
    else if(this.state.currPage === "Play") {
      return <Play/>
    }
    else {
      return <Intro/>
    }
  }
 
  
  activityList = ["hiking", "canoeing", "procrasti-baking"];
 
  // activityMap = activityList.map((activity) => {
  //   return(
  //     <p>I enjoy {activity}.</p>
    

 
  render() {
    // const welcome = function() {  
    //   alert("WELCOME!! Please disregard any broken functionalities (e.g. you have to click OK twice to close this pop-up and my Recipe Ideas and Stuff pages don't render yet)! They will be fixed soon, hopefully by your next visit :) ");
    // }
   
    // setTimeout(welcome, 800);

    
    return (
      <div>
      <div className="App">
        <Navbar changeCurrPage = {this.changeCurrPage}/>
        {this.renderPage()}        
       
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
