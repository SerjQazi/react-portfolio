import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './home/Home';
import Profile from './components/profile/Profile'


function App() {

  return (
    <main>
      <div className="background min-h-screen flex justify-center items-center bg-gradient-to-tr from-slate-300 to-sky-50">
        <Router>
            {/* Header */}
            <div className='wrapper px-2 md:px-0 lg:px-4 xl:px-12 2xl:px-14 phone:h-auto sm:px-4 phone:px-0 phone:pr-2'>
              <div className="cardContainer max-w-screen-3xl w-full">
                <div className="card bg-slate-100 shadow-[5px_5px_15px_8px_rgba(0,0,0,0.5)]">
                  <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='profile/*' element={<Profile/>} />
                  </Routes>
                </div>
              </div> 
            </div>
            {/* --end of cardContainer */}
        </Router>
      </div>
    </main>
  )
}

export default App
