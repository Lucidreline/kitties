import { useState } from 'react'

import './App.scss'
import Flyer from './components/flyer/flyer'

function App() {
  const endymionDetails = [
    { normal: "Last Seen: ", accent: "8/2/2025" },
    { normal: "Responds to ", accent: `"Come here Endymion"` },
    { normal: "Shady Dell Ln/Knapps", accent: "" },
    { normal: "Wearing: ", accent: "A blue color with fishes" },
    { normal: "Super shy, approach slowly", accent: "" },
    { normal: "Call him by name in a soft tone", accent: "" },
  ]
  return (
    <Flyer name="Endymion" pronounce="N-Dim-E-N" details={endymionDetails} photo="endymion.jpg"></Flyer>

  )
}

export default App
