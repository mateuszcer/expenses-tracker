import React from 'react'
import Inputs from './ExpenseInputs'
import Header from './Header'
import Graph from './Graph'
import Footer from './Footer'
import '../syles/ExpenseTracker.css'
function ExpenseTracker({budget, setBudget}) {

  const inputs = [
    {name: "income",
    id: 1},
    {name: "expenses",
    id: 2}
  ]

  return (
    <section className="expense-tracker">
      <div className="expense-container">
        <Header budget={budget} className="Header"/>
        <Inputs inputs={inputs} budget={budget} setBudget={setBudget}/>
        <Graph />
        <Footer />
      </div>
    </section>
  )
}

export default ExpenseTracker
