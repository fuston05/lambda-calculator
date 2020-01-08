import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button data-type= 'special' value= {props.buttonLabel} onClick= {(e) => props.clicked(e)}>{props.buttonLabel}</button>
    </>
  );
};

export default SpecialButton;