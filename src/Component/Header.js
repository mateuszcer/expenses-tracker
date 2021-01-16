import React from 'react'
import '../syles/Header.css'
function Header({budget}) {
  return (
    <header>
        <h1>Current budget: {budget}zł</h1>
    </header>

  )
}

export default Header
