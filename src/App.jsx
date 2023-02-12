import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'


function App() {

  return (
    <main>
      <div className="background min-h-screen px-3 md:px-11 flex justify-center items-center bg-gradient-to-tr from-slate-300 to-sky-50">
        <Router>
            {/* Header */}
            <div className="wrapper max-w-screen-2xl w-full">
              <div className="card md:h-full bg-slate-100 shadow-[5px_5px_15px_8px_rgba(0,0,0,0.5)]">
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
