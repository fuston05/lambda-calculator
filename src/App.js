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
  const [operator, setOperator]= useState('');

  let prevOperand= '';
  let curOperand= '';

  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing

  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // const updateDisplay= (e) => {
  //   if(displayState == '0'){ /* if currently '0': replace with new key pressed */
  //     setDisplayState(e.target.textContent);
  //   }else{ /* if NOT currently '0', then append new key pressed */
  //     setDisplayState(displayState + e.target.textContent);
  //   }
  // } /* end updateDisplay */

  const updateDisplay= (e) => {
    //handle initial state of calc.'the default "0"'
    if( e.target.textContent === '0' && displayState === 0){ 
      return;
    }else if( e.target.getAttribute('data-type') === 'operator'  //if your doing '0 + num'
    && displayState === 0 
    && e.target.textContent !== '=' ){
      setDisplayState(displayState + e.target.textContent);
    }else if(e.target.textContent !== '0' && displayState === 0){ //hit '1st' num and it's not a '0'..since 0 is default at start
      setDisplayState(e.target.textContent);
    }else{
      setDisplayState(displayState + e.target.textContent);
    }//end if
   

  } /* end updateDisplay */


  const clearDisplay= () => {
    setDisplayState(0);
  }// end clearDisplay

  const compute= (a, b) => {
    //do math
    switch( operator ){
      case '+' : 
        {let math= a+b;
        return math;}
      case '-' : 
        {let math= a-b;
        return math;}
      case 'x' : 
        {let math= a*b;
          console.log('a: '+a);
          console.log('b: '+b);
        return math;}
      case '/' : 
        {let math= a/b;
        return math;}
        
      default: return;
    }//end switch


  }//end compute

  // steps:
  //what was clicked? number, operator, equals... in what order?
  // if anything is clicked at first other than a num, do nothing


  
  const clickedBtn= (e) => {
    const btnType= e.target.getAttribute('data-type');

    switch( btnType ){
      case 'number': console.log('number');
      updateDisplay(e);
        break;

      case 'special': console.log('special');
        if( e.target.textContent === 'C' ){
          clearDisplay();
        }
        break;

      case 'operator': console.log('operator');
        if( e.target.value !== '=' ){ //if isNOT '=' button clicked
          if(e.target.value === '*'){ //store the math operator to state
            setOperator('x'); 
          }else{setOperator(e.target.value);}//end if
          updateDisplay(e);
        }else{ //if is '=' button clicked
          const arr= displayState.split(operator); //get array from displayState str
          console.log('arr[0]'+ arr[0]);
          console.log('arr[1]'+ arr[1]);
          console.log('arr len: '+ arr.length);
          let prevOperand= parseFloat(arr[0]);
          let curOperand= parseFloat(arr[1]);
          // console.log('curOP'+ curOperand);
          // console.log('prevOP'+ prevOperand);
          setDisplayState(compute(prevOperand, curOperand));
        }//end if
        // updateDisplay(e);
        break;

      default: return;
    }//end switch

    // console.log(e.target.value);

  }//end clickedBtn

  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <Display displayState= {displayState}  />
        <div className="App">
          <div className= 'mainBtnCont'>
            <div className= 'bottomRowCont'>
              <Specials clicked= {clickedBtn} />
              <Numbers clicked= {clickedBtn}/>
            </div>          
          <Operators clicked= {clickedBtn} />
        </div>
        
        
        
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div> {/*end App*/}
    </div>
  );
}

export default App;
