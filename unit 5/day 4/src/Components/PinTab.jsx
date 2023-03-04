import React from 'react'
import PropTypes from 'prop-types'

const PinTab = ({length,maxChar}) => {
  let arr=new Array(length).fill(0);
  console.log(arr)
  return (
    <div>
      <h1>Coustom component</h1>
    {arr.map((ele,i)=><input maxLength={maxChar} key={i}/>)}
    </div>
  )
}
PinTab.propTypes={
  length:PropTypes.number.isRequired,
  maxChar:PropTypes.number.isRequired
}

export default PinTab