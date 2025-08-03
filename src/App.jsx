import { useState } from 'react'
import catDetails from './cat-details'
import './App.scss'
import { Routes, Route } from 'react-router-dom'

import Flyer from './components/flyer/flyer'

function App() {
  return (
    <div className="flyers">
      <Routes>

        {catDetails.map(detail => (
          <Route path={`/${detail.name}`} element={<Flyer name={detail.name} pronounce={detail.pronounce} details={detail.specifics} photo={detail.photo}></Flyer>} />
        ))}
      </Routes>
    </div>

  )
}

export default App
