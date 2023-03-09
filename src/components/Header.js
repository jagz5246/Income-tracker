import React from 'react'

function Header({totalIncome}) {
  return (
    <div className='header'>
        <h1>Income Tracker</h1>
        <div className='total-income'>
           <p> ${totalIncome}</p>
        </div>
    </div>
  )
}

export default Header