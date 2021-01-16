import React from 'react'
import ExpenseTracker from './ExpenseTracker'
import Welcome from './Welcome'

function Start() {

  const [budget, setBudget] = React.useState(localStorage.getItem('budget'))

  React.useEffect(() => {
    if(localStorage.getItem('budgetArr') === null) {
      localStorage.setItem('budgetArr', JSON.stringify([]))
    }
  }, [])

  React.useEffect(() => {
    if(budget !== null) {
      localStorage.setItem('budget', budget) 
      const arr = JSON.parse(localStorage.getItem('budgetArr'))
      if(arr[arr.length - 1] !== budget - 0 && budget !== undefined && budget !== 0 && budget !== null) {
        arr.push(budget - 0)
        localStorage.setItem('budgetArr', JSON.stringify(arr))
      }
    }
  }, [budget])

  return (
   
    <React.Fragment>
      {localStorage.getItem('budget') !== null ? <ExpenseTracker budget={budget} setBudget={setBudget}/> : <Welcome setBudget={setBudget}/>}
    </React.Fragment>
  )

}

export default Start
