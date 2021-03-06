import React from "react";

const NumberButton = (props) => {
  return (
    <>
  <button data-type= 'number' value= {props.buttonLabel} onClick= { (e) => {props.clicked(e)} }>{props.buttonLabel}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  )
};

export default NumberButton;
