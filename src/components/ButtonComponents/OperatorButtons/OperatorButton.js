import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button data-type= 'operator' onClick= { (e) => { props.clicked(e) } } value={ props.buttonObj.value }>{props.buttonObj.char}</button>
    </>
  );
};

export default OperatorButton;