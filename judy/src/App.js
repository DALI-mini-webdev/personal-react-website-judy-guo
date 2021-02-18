import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro'
import Work from './components/Work'
import Play from './components/Play'
import axios from 'axios'; 
import firebase from './firestore/index';
import ToDoBoard from './components/ToDoBoard';



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
 
  fetchData = () => {
    // It will take an indeterminate amount of time for axios to get the data
    // so we use this then/catch format
    // this says: hit this endpoint. Then when you're done do X. 
    // If there is an error at any point, do Y
     axios.get("https://poetrydb.org/random")
     .then((response) => {
       console.log(response);
       this.setState({data: response.data[0]})
     }).catch((error) => {
       console.log(error)
     })

 };

 renderData = () => {
   if(this.state.data) {
     return(
       <div>
         <div>{this.state.data.title}</div>
         <div>By {this.state.data.author}</div>
         {this.state.data.lines.map((line, idx) => {
           return(<div key ={idx}>{line}</div>)
         })}

       </div>
     )
   }else{
     return null
   }
 }

  activityList = ["hiking", "canoeing", "procrasti-baking"];
 
  // activityMap = activityList.map((activity) => {
  //   return(
  //     <p>I enjoy {activity}.</p>
    

 
  render() {
    console.log(firebase);
    console.log(firebase.db);
    // const welcome = function() {  
    //   alert("WELCOME!! Please disregard any broken functionalities (e.g. you have to click OK twice to close this pop-up and my Recipe Ideas and Stuff pages don't render yet)! They will be fixed soon, hopefully by your next visit :) ");
    // }
   
    // setTimeout(welcome, 800);

    
    return (
      <div>
      <div className="App">
        <Navbar changeCurrPage = {this.changeCurrPage}/>
        {this.renderPage()}  
        <ToDoBoard />
        <button onClick={this.fetchData}>click for brain food!</button>
            {this.renderData()}

       
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
