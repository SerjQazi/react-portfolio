import React from 'react'
import Navigation from '../../components/Navigation'
import selfPortraitSlate from '../../assets/selfPortraitSlate.png'
import logo from '../../assets/sqLogo.png'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import About from '../about/About'
import Resume from '../resume/Resume'

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
        </Routes>
        </div>


    </div>
  )
}

export default Profile