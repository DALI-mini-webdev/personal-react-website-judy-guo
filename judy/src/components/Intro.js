import '../App.css'
import React from 'react';
import brioche from '../pics/brioche.JPG';
import canoeing from '../pics/canoeing.jpeg';
import cinbns from '../pics/cin buns.jpeg';
import hiking from '../pics/hiking.jpeg';
import painting from '../pics/painting.jpeg';
import strawbcake from '../pics/strawb cake.jpeg';
import walk from '../pics/walk.jpeg';

const buttonFunctionGit = () => {
    window.open("https://github.com/judy-guo")
    console.log("the 'explore my github' button was clicked");
  }

const buttonFunctionVSCO = () => {
    window.open("https://vsco.co/juds-foods/gallery")
    console.log("the 'explore my vsco' button was clicked");
  }

const buttonFunctionGmail = () => {
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMSqcvkDVSntlWtRWchHBWKPbxjHDPwRNCZpslDfQBLmNVvSkVsblPlRjkRldHMvcmGwRxK")
    console.log("the 'contact me' was clicked")
}
const Intro = (props) => {
      
    return (    
      <>
        <div>
        <header className= "App-header">
          <p>
            <br></br>
            Judy Guo +
            {/* <button onClick={this.buttonFunctionGmail}>Contact me</button>             */}
 
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
          {/* <button onClick={this.buttonFunctionGit}>+ Explore my GitHub</button> */}
  
    
        </header>
        <header className="App-body">  
          <br></br>
          {/* <div>{this.activityMap}</div> */}
          <img src={strawbcake} width="142" height="189"/> 
          <img src={brioche} width="152" height="189"/> 
          <img src={cinbns} width="200" height="189"/>
          <br></br>
          {/* <button onClick={this.buttonFunctionVSCO}>+ Explore my VSCO</button> */}
       </header>
      
      </div>
      
      </>
    );
}

export default Intro
