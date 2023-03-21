import React from 'react'
import { FaReact, SiTailwindcss, SiJavascript, SiJquery, SiHtml5, SiCss3, FaSass, SiGithub, SiFirebase, FaDatabase, VscDebugAll, IoMdTabletPortrait, FaUniversalAccess } from 'react-icons/all';

const Skills = () => {
    return (
        <>
            <div className='flex justify-center items-center border-2 border-dashed border-slate-400 border-opacity-50 mt-4 mb-5 sm:my-6 phone:my-4 mx-20 2xl:mx-36'>
                <h3 className='uppercase text-yellow-500 text-lg phone:text-base xl:text-2xl 2xl:text-2xl font-bold tracking-widest phone:tracking-widest sm:tracking-[0.35em] xl:tracking-[0.35em] py-1 phone:py-0.5 sm:py-2 2xl:py-3'>
                    Skills
                </h3>
            </div>

            <div className="text-yellow-500 text-xl phone:text-sm sm:text-4xl lg:text-sm xl:text-2xl 2xl:text-5xl">
                <ul className='grid grid-cols-4 phone:grid-cols-6 lg:grid-cols-4 tracking-wider'>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center'>
                        <FaReact />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>React</p>
                    </li>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center'>
                        <SiJavascript />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>JavaScript</p>
                    </li>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center'>
                        <SiJquery />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>jQuery</p>
                    </li>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center'>
                        <SiHtml5 />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>HTML 5</p>
                    </li>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center'>
                        <SiCss3 />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>CSS 3</p>
                    </li>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center'>
                        <FaSass />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>SASS</p>
                    </li>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center'>
                        <SiTailwindcss />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>Tailwind</p>
                    </li>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center'>
                        <SiGithub />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>GitHub</p>
                    </li>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center'>
                        <SiFirebase />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>Firebase</p>
                    </li>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center'>
                        <FaDatabase />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>RESTful API</p>
                    </li>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center phone:hidden lg:flex'>
                        <VscDebugAll />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>Debugging</p>
                    </li>
                    <li className='mb-3 phone:mb-2 lg:mb-1 flex flex-col justify-center items-center'>
                        <IoMdTabletPortrait />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 lg:mb-2 text-slate-100'>Responsive</p>
                    </li>
                    <li className='mb-4 phone:mb-2 lg:mb-1 xl:mb-2 flex flex-col justify-center items-center col-span-4 phone:col-span-1 lg:col-span-4'>
                        <FaUniversalAccess />
                        <p className='text-xs phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] xl:text-sm text-center font-thin mt-2 phone:mt-2 sm:mt-3 lg:mt-1 text-slate-100'>A11Y</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Skills