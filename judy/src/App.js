import logo from './logo.svg';
import './App.css';
import brioche from './pics/brioche.JPG';
import canoeing from './pics/canoeing.jpeg';
import cinbns from './pics/cin buns.jpeg';
import hiking from './pics/hiking.jpeg';
import painting from './pics/painting.jpeg';
import strawbcake from './pics/strawb cake.jpeg';
import walk from './pics/walk.jpeg';
import Navbar from './components/Navbar/Navbar';



function App() {
  const onChangeFunction = (event) => {
    console.log(event.target.value);
  }
  
  const buttonFunctionGit = () => {
    window.open("https://github.com/judy-guo")
    console.log("the 'explore my github' button was clicked");
  }
  const buttonFunctionVSCO = () => {
    window.open("https://vsco.co/juds-foods/gallery")
    console.log("the 'explore my vsco' button was clicked");
  }
  const activityList = ["hiking", "canoeing", "procrasti-baking"];
 
  const activityMap = activityList.map((activity) => {
    return(
      <p>I enjoy {activity}.</p>
    )
  });
 
 
  return (
    <div>
    <div className="App">
      <Navbar />
      <header className= "App-contact">
        <p>Dartmouth College</p>
        <p>judy.guo.24@dartmouth.edu</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </header>
    </div>

    <div>
      <header className= "App-header">
        <p>
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
        <button onClick={buttonFunctionGit}>+ Explore my GitHub</button>

  
      </header>
      <header className="App-body">  
        <br></br>
        <div>{activityMap}</div>
        <img src={strawbcake} width="142" height="189"/> 
        <img src={brioche} width="152" height="189"/> 
        <img src={cinbns} width="200" height="189"/>
        <br></br>
        <button onClick={buttonFunctionVSCO}>+ Explore my VSCO</button>
     </header>

    </div>

  </div>
  );


}
export default App;
