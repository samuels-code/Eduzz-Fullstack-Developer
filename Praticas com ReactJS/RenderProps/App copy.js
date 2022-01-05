import React, { Component } from 'react'
import Counter from '../src/counter'

const Buttons = ({ increment, decrement, count}) => (
  <div>
    <h1>Valor atual: {count}</h1>
    <div>
      <button onClick={increment}>adicionar 1</button>
    </div>
    <div>
      <button onClick={decrement}>Remover 1</button>
    </div>
    </div>
    )

class App extends Component {
  render (){
    return (
      <div>
       <Counter render={ 
         ({ increment, decrement, count}) => (
           <Buttons 
            increment={increment}
            decrement={decrement}
            count={count}
           />
         )
       } />
      </div>
    )
  }
}

export default App;