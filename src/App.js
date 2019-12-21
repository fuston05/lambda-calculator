import React, {useState} from "react";
import "./App.css";
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  const [displayState, setDisplayState]= useState(0);
  const [currBtn, setCurBtn]= useState(Array);
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing

  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  const updateDisplay= (e) => {
    if(displayState == 0){
      setDisplayState(e.target.textContent);
    }else{
      setDisplayState(displayState + e.target.textContent);
    }
    
    // console.log('display: ' ,displayState);
    // console.log('currBtn: ',currBtn);
  }

  const clearDisplay= () => {
    setDisplayState(0);
    // console.log('clearDisplay called');
  }
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <Display displayState= {displayState}  />

        <div className="App">
          <div className= 'mainBtnCont'>
            <div className= 'bottomRowCont'>
              <Specials clicked= {clearDisplay} />
              <Numbers clicked= {updateDisplay}/>
            </div>          
          <Operators />
        </div>{// end mainBtnCont
        }
        
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>{/*end App*/}
    </div>
  );
}

export default App;
