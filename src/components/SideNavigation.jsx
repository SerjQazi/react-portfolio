import React from 'react'
import { NavLink } from 'react-router-dom';

import selfPortraitSlate from   '../assets/selfPortraitSlate.png'

const SideNavigation = () => {

    const activeLink = 'text-white'
    const normalLink = ''

    return (
        <>
            <div className="logoContainer">
                <img className="img" src={selfPortraitSlate} alt="Self Portrait"/>
            </div>

            <div className="navContainer phone:h-[50.4vh] 2xl:h-[44.4vh] bg-yellow-500 flex justify-center items-center">
                <ul className='uppercase font-sans font-bold text-[0.5rem] text-center tracking-[0.35em]'>
                    <li className='p-4 phone:p-2 mb-2 phone:my-2 border-b border-slate-900 border-opacity-25'>
                        <NavLink to='/' className={({ isActive}) => isActive ? activeLink:normalLink}>
                            Home
                        </NavLink>
                    </li>
                    <li className='p-4 phone:p-2 mb-2 phone:my-2 border-b border-slate-900 border-opacity-25'>
                        <NavLink to={"/profile/about"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                            About Me
                        </NavLink>
                    </li>
                    <li className='p-4 phone:p-2 mb-2 phone:my-2 border-b border-slate-900 border-opacity-25'>
                        <NavLink to={"/profile/resume"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                            Resume
                        </NavLink>
                    </li>
                    <li className='p-4 phone:p-2 mb-2 phone:my-2 border-b border-slate-900 border-opacity-25'>
                        <NavLink to={"/profile/portfolio"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li className='p-4 phone:p-2 mb-2 phone:my-2'>
                        <NavLink to={"/profile/contacts"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                            Contact
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}

export default SideNavigation