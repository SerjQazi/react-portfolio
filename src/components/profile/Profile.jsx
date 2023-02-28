import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SideNavigation from '../SideNavigation'
import TopNavigation from '../TopNavigation'

import About from '../../pages/about/About'
import Resume from '../../pages/resume/Resume'
import Portfolio from '../../pages/portfolio/Portfolio'
import Contacts from '../../pages/contacts/Contacts'

const Profile = () => {
  return (
    <div className='grid grid-cols-5 border-2 border-green-500'>

      <div className="col-span-1 border-2 border-red-500">
        <SideNavigation />
      </div>

      <div className="grid col-span-4 border-2 border-blue-500">
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