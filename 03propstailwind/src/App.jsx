import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  return (
    <>
      <h1>Props Project </h1>
      <Card cardName="Card One" btnText="Click Me"/>
      <Card cardName="Card Two" btnText= "Submit"/>
    </>
  )
}

export default App
