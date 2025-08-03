import { useState } from 'react'
import catDetails from './cat-details'
import './App.scss'
import Flyer from './components/flyer/flyer'

function App() {
  return (
    <div className="flyers">
      {catDetails.map(detail => (
        <Flyer name={detail.name} pronounce={detail.pronounce} details={detail.specifics} photo={detail.photo}></Flyer>
      ))}
    </div>

  )
}

export default App
