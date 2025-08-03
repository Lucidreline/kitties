import { useState } from 'react'
import catDetails from './cat-details'
import './App.scss'
import { Routes, Route } from 'react-router-dom'

import Flyer from './components/flyer/flyer'
import HomePage from './components/home-page/home-page'

function App() {
  return (
    <div className="flyers">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {catDetails.map(detail => (
          <Route key={detail.name} path={`/${detail.name}`} element={<Flyer name={detail.name} pronounce={detail.pronounce} details={detail.specifics} photo={detail.photo}></Flyer>} />
        ))}
      </Routes>
    </div>

  )
}

export default App
