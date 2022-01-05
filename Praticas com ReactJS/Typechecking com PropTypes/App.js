import React from 'react'
import PetShop from './PetShop'


function App () {
  const handleClick = () => {
    console.log('iniciando o banho...')
  }
  return (
   <PetShop
    dogs = {2}
    customerName="Wander Augusto"
    onClick={handleClick}
    status="done"
   />
  )
}

export default App;