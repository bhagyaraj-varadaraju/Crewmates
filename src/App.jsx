import { Routes, Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Create from './Pages/Create'
import Gallery from './Pages/Gallery'
import Info from './Pages/Info'
import Edit from './Pages/Edit'

import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />

      <div className="whole-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/:id" element={<Info />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
