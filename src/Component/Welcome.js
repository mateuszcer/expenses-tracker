import React from 'react'
import '../syles/Welcome.css'
import Icon from './Icon'
function Welcome({setBudget}) {

  const [value, setValue] = React.useState()
  
  const handleBudgetSet = (value) => {
    setBudget(value)
    window.location.reload(false)
  }

  return (
    <div className="container">
      <div className="grid">
        <h1>Welcome</h1>
        <p className="paragraph">Type in your budget</p>
        <div className="form">
          <input type="number" onInput={e =>  {setValue(e.target.value - 0)}}/>
          <button onClick={() => value === undefined ? alert('invalid value') : handleBudgetSet(value)}  >SET BUDGET</button>
        </div>
      </div>
      <Icon name="welcome-icon"/>
    </div>
  )
}

export default Welcome
