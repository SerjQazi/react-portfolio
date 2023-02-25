import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {

    const activeLink = 'text-white'
    const normalLink = ''

    return (
        <div>
            <ul className='uppercase font-sans font-bold text-center'>
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
                    <NavLink>
                        Portfolio
                    </NavLink>
                </li>
                <li className='p-4 mb-2'>
                    <NavLink>
                        Contact
                    </NavLink>
                </li>
                
            </ul>
        </div>
    )
}

export default Navigation