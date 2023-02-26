import React from 'react'
import Navigation from '../Navigation'
import selfPortraitSlate from '../../assets/selfPortraitSlate.png'
import logo from '../../assets/sqLogo.png'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import About from '../../pages/about/About'
import Resume from '../../pages/resume/Resume'
import Portfolio from '../../pages/portfolio/Portfolio'
import Contacts from '../../pages/contacts/Contacts'

const Profile = () => {
  return (
    <div className='grid grid-cols-5 gap-0'>

      <div className="leftSide col-span-1">
        <div className="logoContainer">
          <img className="img" src={selfPortraitSlate} alt="Self Portrait"/>
        </div>

        <div className="navContainer h-[36.4vh] bg-yellow-500 flex justify-center items-center">
          <Navigation />
        </div>
      </div>

      <div className="rightSide grid col-span-4">
        <Routes>
          <Route path='about' element={<About/>} />
          <Route path='resume' element={<Resume/>} />
          <Route path='portfolio' element={<Portfolio/>} />
          <Route path='contacts' element={<Contacts/>} />
        </Routes>
      </div>
      
    </div>
  )
}

export default Profile