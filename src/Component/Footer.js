import React from 'react'
import '../syles/Footer.css'
import Icon from './Icon'
function Footer() {
  const handleClick = () => {
    localStorage.removeItem('budget')
    localStorage.removeItem('budgetArr')
    window.location.reload(false)
  }
  return (
    <div className="btn-container">
      <Icon name="icon"/>
      <button className="reset-button" onClick={handleClick}>Reset budget</button>
    </div>
  )
}

export default Footer
