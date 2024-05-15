import React, { useState } from 'react'
import { items } from './Data'
import Content from './Content'

const App = () => {

const [totalPrice , setTotalPrice] = useState(0)
const [increaseCount , setIncreaseCount] = useState(0)
const [decreaseCount, setDecreaseCount] = useState(0)

const handleIncrease = (price) =>{
setIncreaseCount(increaseCount+1)
setTotalPrice(totalPrice+price)
}
                                    
const handleDecrease = (price) =>{
if(totalPrice - price >=0){
  setDecreaseCount(decreaseCount+1)
  setTotalPrice(totalPrice - price)
}
}


  return (
    <>
    <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'pink', padding:'50px'}}>
      <h2>hot deals</h2>
      <h3>Total Price:${totalPrice}</h3>
      <h2>my price {increaseCount}</h2>
    </div>


{items.map((item)=>{
  return(
    <>
  <Content
  key={item.id}

  item={item}


  onDecrease={handleDecrease}

  onIncrease={handleIncrease}

  />
    
    
    
    </>
  )
})}

</>
  )
}

export default App
