import React from 'react'

const CountryCart = ({id,country,name,population,handleDelete}) => {

  return (
    <div style={{border:'1px solid black', margin:'5px' , padding:'5px'}}>
        <h4>{id}</h4>
        <h2>{name}</h2>
        <h4>{country}</h4>
        <h2>{population}</h2>
        <button onClick={()=>handleDelete(id)}>delete</button>
    </div>
  )
}

export default CountryCart