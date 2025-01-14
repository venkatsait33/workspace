import Home from "./pages/Home"
import './App.css'
import { Route, Routes } from "react-router-dom"
import About from "./pages/About/About"
import Work from "./pages/work/Work"
import Private from "./pages/Private/Private"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/private' element={<Private />} />
      </Routes>
    </div>
  )
}

export default App