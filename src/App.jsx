import { Route, Routes } from 'react-router-dom'
import './App.css'
import { StartPlayground } from './pages/StartPlayground'
import { PlayGame } from './pages/PlayGame'
import { Home } from './pages/Home'
import { WordContext } from './Context/wordContext'
import { useState } from 'react'

function App() {

  const [words, setWords] = useState([]);

  return (
    <WordContext.Provider value={{words, setWords}}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/start" element={<StartPlayground/>}/>
        <Route path="/play" element={<PlayGame/>}/>
      </Routes>
    </WordContext.Provider>
  )
}

export default App
