import React from 'react'
function InputGroup({budget, handleClick, setValue, value, name, classes, setClasses}) {
  return (
    <div className="input-group">
      <div className="pair">
        <input type="number" onInput={e => {setValue(e.target.value - 0)}} onFocus={e => e.target.classList.add('clicked')}/>
        <label>{name}</label>
      </div>
      <div className="pair">
        <input type="number" onFocus={e => e.target.classList.add('clicked')}/>
        <label>Type of {name}</label>
    </div>
      <button onClick={() =>  handleClick(budget, value, name)}>Update</button>
    </div>
  )
}

export default InputGroup
