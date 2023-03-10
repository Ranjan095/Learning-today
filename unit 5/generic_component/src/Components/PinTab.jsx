/** @format */

import React, { useEffect, useRef,useState } from "react";
import PropTypes from "prop-types";

const PinTab = ({ length, maxChar, setOtp }) => {
  let arr = new Array(length).fill(0);
  let [arrValue]=useState(new Array(length).fill(''))
  let inputRef = useRef([]);
  useEffect(() => {
    inputRef.current[0].focus()
    console.log(inputRef);
  },[]);
  // console.log(inputRef);
  // console.log(arr)
  let handleChange = (e, i) => {
    arrValue[i]=e.target.value;
    setOtp(arrValue.join(''))
    // setotp(arrValue.join(''))
    console.log(arrValue)
    // console.log(e.target.value);
    if(i<length-1 && inputRef.current[i].value.length==maxChar){
      inputRef.current[i+1].focus()
    }
    
  };
  

  return (
    <div>
      <h1>Coustom component</h1>
      {arr.map((ele, i) => (
        <input
        key={i}
          ref={(input) => {
            inputRef.current[i]=input
          }}
          onChange={(e) => handleChange(e, i)}
          maxLength={maxChar}
          
        />
      ))}
     
    </div>
  );
};
PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number.isRequired,
};

export default PinTab;
