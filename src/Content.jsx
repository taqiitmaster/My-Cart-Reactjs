import React, { useState } from 'react'

const Content = ({item , onIncrease, onDecrease}) => {

const[count, setCount]=useState(0);

const increaseCount = () =>{
setCount(count+1);
onIncrease(item.price);
}


const decreaseCount = () =>{
    if(count>0){
    setCount(count+1);
    onDecrease(item.price);
}}
  return (
    <>


<img src={item.image} />


   <h2>{item.tittle}</h2>

  <p>{item.price}</p>

      <button onClick={increaseCount}  style={{padding:'10px', backgroundColor:'red'}}>+  </button>

      <button onClick={decreaseCount} style={{padding:'10px', backgroundColor:'yellow'}}>-</button>
    </>
  )
}

export default Content
