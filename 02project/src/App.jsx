import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)

  const addValue = ()=>{
    if (counter < 20) {
      counter=counter+1 
      setCounter(counter)
    }
  }
  const removeValue = () =>{
    if (counter > 0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Project 2 useState(hook)</h1>
      <h2>Counter Value {counter}</h2>
      <br/>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
