import React from 'react'
import { FaReact, SiTailwindcss, SiJavascript, SiJquery, SiHtml5, SiCss3, FaSass, SiGithub, SiFirebase, FaDatabase, VscDebugAll, IoMdTabletPortrait, FaUniversalAccess } from 'react-icons/all';

const Skills = () => {
    return (
        <>
            <div className='flex justify-center items-center border-2 border-dashed border-slate-400 border-opacity-50 mx-36 my-4'>
                <h3 className='uppercase text-yellow-500 text-2xl font-bold tracking-[0.35em] py-3'>Skills</h3>
            </div>

            <div className="text-yellow-500 text-4xl">
                <ul className='grid grid-cols-6 tracking-wider'>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <FaReact />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>React</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <SiJavascript />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>JavaScript</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <SiJquery />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>jQuery</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <SiHtml5 />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>HTML 5</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <SiCss3 />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>CSS 3</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <FaSass />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>SASS</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <SiTailwindcss />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>Tailwind</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <SiGithub />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>GitHub</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <SiFirebase />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>Firebase</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <FaDatabase />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>RESTful API</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <VscDebugAll />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>Debugging</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center'>
                    <IoMdTabletPortrait />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>Responsive</p>
                    </li>
                    <li className='mb-4 flex flex-col justify-center items-center col-span-6'>
                    <FaUniversalAccess />
                    <p className='text-xs text-center font-thin mt-3 text-slate-100'>A11Y</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Skills