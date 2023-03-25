import {React, useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SideNavigation from '../SideNavigation'
import TopNavigation from '../TopNavigation'

import About from '../../pages/about/About'
import Resume from '../../pages/resume/Resume'
import Portfolio from '../../pages/portfolio/Portfolio'
import Contacts from '../../pages/contacts/Contact'

const Profile = () => {
  
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 844;

  useEffect(() => {
  const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);


  return (
    <div className='phone:grid grid-cols-5'>

      <div className="phone:col-span-1">
        {
          width < breakpoint ?
          <TopNavigation />
          :
          <SideNavigation />
        }
      </div>

      <div className="phone:grid col-span-4">
        <Routes>
          <Route exact path='profile/about' element={<About/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Routes>
      </div>
      
    </div>
  )
}

export default Profile