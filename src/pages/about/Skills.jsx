import React from 'react'
import { FaReact, SiTailwindcss, SiJavascript, SiJquery, SiHtml5, SiCss3, FaSass, SiGithub, SiFirebase, FaDatabase, VscDebugAll, IoMdTabletPortrait, FaUniversalAccess } from 'react-icons/all';

const Skills = () => {
    return (
        <>
            <div className='flex justify-center items-center border-2 border-dashed border-slate-400 border-opacity-50 my-4 mx-20 2xl:mx-36'>
                <h3 className='uppercase text-yellow-500 text-lg phone:text-base 2xl:text-2xl font-bold tracking-widest lg:tracking-[0.35em] py-1 phone:py-0.5 2xl:py-3'>
                    Skills
                </h3>
            </div>

            <div className="text-yellow-500 text-xl phone:text-sm 2xl:text-4xl">
                <ul className='grid grid-cols-4 phone:grid-cols-6 lg:grid-cols-6 tracking-wider mb-2'>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center'>
                    <FaReact />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>React</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center'>
                    <SiJavascript />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>JavaScript</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center'>
                    <SiJquery />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>jQuery</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center'>
                    <SiHtml5 />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>HTML 5</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center'>
                    <SiCss3 />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>CSS 3</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center'>
                    <FaSass />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>SASS</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center'>
                    <SiTailwindcss />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>Tailwind</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center'>
                    <SiGithub />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>GitHub</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center'>
                    <SiFirebase />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>Firebase</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center'>
                    <FaDatabase />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>RESTful API</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center phone:hidden'>
                    <VscDebugAll />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>Debugging</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center'>
                    <IoMdTabletPortrait />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>Responsive</p>
                    </li>
                    <li className='mb-4 phone:mb-2 flex flex-col justify-center items-center col-span-4 phone:col-span-1 lg:col-span-2'>
                    <FaUniversalAccess />
                    <p className='text-xs phone:text-[0.5rem] text-center font-thin mt-3 phone:mt-2 text-slate-100'>A11Y</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Skills