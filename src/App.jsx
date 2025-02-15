import { useState } from 'react'
import RouletteBoard from './components/RouletteBoard'
import './App.css'

function App() {

  return (
    <>
      <div id='play-container'>
        <RouletteBoard></RouletteBoard>
      </div>
      <div id='score-container'>

      </div>
    </>
  )
}

export default App
