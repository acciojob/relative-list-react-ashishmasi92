import React from 'react'


let persons = ["raj","ravi","rohan","roshan"]
const App = () => {
  return (
    <div id="main">

      <ol>
        {persons.map((value)=>{
return <li>{value}</li>
        })}
      </ol>

    </div>
  )
}

export default App
