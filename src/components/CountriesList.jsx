import React from 'react'
import {Link} from 'react-router-dom'

function CountriesList(props) {
  return (
    
      <div className='col-5 countries-list'>

        {props.contries.map((country)=>{

       <div className='group-list'>

       </div>


        )


        })}
      
            
    )
}

export default CountriesList