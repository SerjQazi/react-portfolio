import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const TopNavigation = () => {

    const activeLink = 'text-white'
    const normalLink = ''

    return (
        <div>
            <ul className='uppercase font-sans font-bold text-center tracking-[0.35em]'>
                <li className='p-4 mb-2 border-b border-slate-900 border-opacity-25'>
                    <NavLink to='/' className={({ isActive}) => isActive ? activeLink:normalLink}>
                        Home
                    </NavLink>
                </li>
                <li className='p-4 mb-2 border-b border-slate-900 border-opacity-25'>
                    <NavLink to={"/profile/about"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                        About Me
                    </NavLink>
                </li>
                <li className='p-4 mb-2 border-b border-slate-900 border-opacity-25'>
                    <NavLink to={"/profile/resume"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                        Resume
                    </NavLink>
                </li>
                <li className='p-4 mb-2 border-b border-slate-900 border-opacity-25'>
                    <NavLink to={"/profile/portfolio"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                        Portfolio
                    </NavLink>
                </li>
                <li className='p-4 mb-2'>
                    <NavLink to={"/profile/contacts"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                        Contact
                    </NavLink>
                </li>
                
            </ul>
        </div>
    )
}

export default TopNavigation