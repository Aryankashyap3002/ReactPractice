import { Route, Routes } from 'react-router-dom'
import './App.css'
import { StartPlayground } from './pages/StartPlayground'
import { PlayGame } from './pages/PlayGame'

function App() {

  return (
    <Routes>
      <Route path="/start" element={<StartPlayground/>}/>
      <Route path="/play" element={<PlayGame/>}/>
    </Routes>
  )
}

export default App
