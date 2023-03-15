import React from 'react'
import { NavLink } from 'react-router-dom';

import { FaHome, BsFillPersonFill, VscFilePdf, CgCodeSlash, TiContacts } from 'react-icons/all'

const TopNavigation = () => {

    const activeLink = 'text-white'
    const normalLink = ''

    return (
        <div className='bg-yellow-500'>
            <ul className='uppercase font-sans font-medium text-3xl text-center text-slate-700 tracking-[0.35em] flex justify-center items-center'>
                <li className='py-2 px-5 sm:px-11 border-r border-slate-900 border-opacity-25'>
                    <NavLink to='/' className={({ isActive}) => isActive ? activeLink:normalLink}>
                        <FaHome />
                    </NavLink>
                </li>
                <li className='py-2 px-5 sm:px-11 border-r border-slate-900 border-opacity-25'>
                    <NavLink to={"/profile/about"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                        <BsFillPersonFill />
                    </NavLink>
                </li>
                <li className='py-2 px-5 sm:px-11 border-r border-slate-900 border-opacity-25'>
                    <NavLink to={"/profile/resume"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                        <VscFilePdf />
                    </NavLink>
                </li>
                <li className='py-2 px-5 sm:px-11 border-r border-slate-900 border-opacity-25'>
                    <NavLink to={"/profile/portfolio"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                        <CgCodeSlash />
                    </NavLink>
                </li>
                <li className='py-2 px-5 sm:px-11'>
                    <NavLink to={"/profile/contacts"} className={({ isActive}) => isActive ? activeLink:normalLink}>
                        <TiContacts />
                    </NavLink>
                </li>
                
            </ul>
        </div>
    )
}

export default TopNavigation