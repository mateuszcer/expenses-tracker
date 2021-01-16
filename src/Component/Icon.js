import React from 'react'
import '../syles/Icon.css'
function Icon({name}) {
  return (
    <div className={name}>
      <a href="https://github.com/mateuszcer/expenses-tracker" target="_blank" rel="noreferrer"> 
        <i className="fab fa-github"></i>
      </a>
    </div>
  )
}

export default Icon
