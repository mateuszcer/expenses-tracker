import React from 'react'
import '../syles/Inputs.css'
import InputGroup from './InputGroup'
function ExpenseInputs({inputs, budget, setBudget}) {

  const [value, setValue] = React.useState()
  const handleClick = (budget, value, id) => {
    if(value) {
      id === 'income' ? setBudget((budget - 0) + (value - 0)) : setBudget((budget - 0) - (value - 0))
    }
    window.location.reload(false)
  }

  return (
    <div className="input-grid">
      {inputs.map(input => {
        return (
          <InputGroup budget={budget} handleClick={handleClick} setValue={setValue} value={value} name={input.name} key={input.id}/>
        )
      })}
      
    </div>
  )
}

export default ExpenseInputs
