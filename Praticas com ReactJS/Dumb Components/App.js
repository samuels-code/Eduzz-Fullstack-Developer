import React, { useState } from 'react'
import Button from '../src/Components/Button'
import Calc from '../src/Components/Calc'
function App() {

  const [value, setValue] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(30)

  const handleClick = () => {
    setMin(10)
  }

  const handleCalc = (target) => {
    const  value = target.value
    setValue(min + max + value)
  }
  return (
    <>
      <Button
        onClick={handleClick}
      >
        Adicionar no carrinho
    </Button>
      <br />
      <br />
      <br />
      <h1>Valor calculado: {value}</h1>
      <Calc
        min={min}
        max={max}
        onChange={handleCalc}
      />
    </>
  )
}

export default App