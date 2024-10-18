import React from 'react'

interface Tprop {
    name: string,
    age: string,
    roll: number,
    class: string,
    center: string,
}


function CARD(prop:Tprop) {
  return (
    <div> 
    

        <h1><p className='inline-flex text-black-500'>Name: </p>{prop.name}</h1><br/>
        <h1><p className='inline-flex text-black-500'>Age: </p>{prop.age}</h1><br/>
        <h1><p className='inline-flex text-black-500'>Roll: </p>{prop.roll}</h1><br/>
        <h1><p className='inline-flex text-black-500'>Class:</p> {prop.class }</h1><br/>
        <h1><p className='inline-flex text-black-500'>Center: </p>{prop.center}</h1>

     
    



</div>






  )
}

export default CARD