import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'


function App() {

  return (
    <main>
      <div className="background">
        <Router>
            {/* Header */}
            <div className="wrapper">
              <div className="contentCard">
                <Routes>
                  <Route path='' element={<Home/>} />
                  <Route path='about' element={<About/>} />
                </Routes>
              </div>
              {/* Footer */}
            </div> 
            {/* --end of wrapper */}
        </Router>
      </div>
    </main>
  )
}

export default App
