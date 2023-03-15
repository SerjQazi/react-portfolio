import {React, useState, useEffect} from 'react'
import { FaReact, SiJavascript, AiFillHtml5 } from 'react-icons/all'

import Education from './Education'

const Resume = () => {

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

  const mobile = 'verticalText uppercase text-center font-black tracking-wide text-slate-700 text-lg py-2 px-1'
  const desktop = 'uppercase text-center font-black tracking-widest text-slate-700 phone:text-xl 2xl:text-8xl py-6 phone:py-2'

  return (
    <div className=''>
      <h3 className='uppercase font-bold text-base phone:text-base sm:text-2xl text-slate-700 mb-2 phone:mb-1'>
        Experience
      </h3>

          <div className='text-slate-700 phone:grid grid-cols-2'>
            <div className='mb-3 phone:mb-0 phone:mr-2'>
              <h4 className='text-sm phone:text-[0.5rem] sm:text-xl font-bold uppercase mb-1 phone:leading-3'>INTERMEDIATE FRONTEND DEVELOPER</h4>
              <p className='font-thin text-sm phone:text-xs mb-2 phone:mb-0.5 sm:text-lg'>
                Bank of Montreal - BMO
              </p>

                <ul className='text-xs phone:text-[0.5rem] sm:text-base'>
                  <li className='ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 mr-10'>
                    <p>Built accessible & responsive web pages on BMO.com & BMOHarris.com</p>
                  </li>
                  <li className='ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 mr-10'>
                    <p>Developed new React components and optimize existing ones</p>
                  </li>
                  <li className='ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3'>
                    <p>Maintained a consistent design language using utility-first CSS frameworks, similar to Tailwind</p>
                  </li>
                  <li className='ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3'>
                    <p>Used advanced git workflows to collaborate on complex codebases among a large development team</p>
                  </li>
                  <li className='ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3'>
                    <p>Prepared deployment artifacts & successfully deployed web pages and other assets to QA, preview, and production servers on a daily basis using Python scripts & OpenText's WEM</p>
                  </li>
                  <li className='ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3'>
                    <p>Worked in an agile environment using Kanban methodologies to ensure optimal performance & productivity</p>
                  </li>
                  <li className='ml-0 mt-1'>
                    <p className='font-bold text-xs phone:text-[0.6rem]'>Tech Stack :</p>
                      <p className='ml-2 flex justify-start items-center text-[0.6rem] phone:text-[0.5rem] leading-3'>
                        &#x2022; React &#x2022; JavaScript &#x2022; HTML5 &#x2022; Tailwind &#x2022; RESTful API &#x2022; Bibucket 
                      </p>
                      <p className='ml-2 flex justify-start items-center text-[0.6rem] phone:text-[0.5rem] leading-3'>
                        &#x2022; Figma &#x2022; Agile Methodologies (Rally & Confluence)
                      </p>
                  </li>
                </ul>
            </div>
            
            <div className='mb-3 phone:mb-0 sm:mb-6'>
              <h4 className='text-sm phone:text-[0.5rem] font-bold uppercase mb-1 phone:leading-3 sm:text-xl'>FRONTEND DEVELOPER</h4>
              <p className='font-thin text-sm phone:text-xs mb-2 phone:mb-0.5 sm:text-lg'>Novela Neurotechnologies</p>


                  <ul className='text-xs phone:text-[0.5rem] sm:text-base'>
                    <li className=' ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3'>
                      <p>Built components with React and JavaScript to integrate API data in an intuitive UX design</p>
                    </li>
                    <li className=' ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3'>
                      <p>Rebuilt existing web application to be fully mobile compatible</p>
                    </li>
                    <li className=' ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3'>
                      <p>Designed and Developed a new application using Figma & React</p>
                    </li>
                    <li className=' ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3'>
                      <p>Created API schemas for new APIs</p>
                    </li>
                    <li className='ml-0 mt-1'>
                      <p className='font-bold text-xs phone:text-[0.6rem]'>Tech Stack :</p>
                        <p className='flex justify-start items-center text-[0.6rem] phone:text-[0.5rem] leading-3'>
                          &#x2022; React &#x2022; JavaScript &#x2022; HTML5 &#x2022; CSS3 &#x2022; SASS &#x2022; Material UI &#x2022; Ant Design 
                        </p>
                        <p className='flex justify-start items-center text-[0.6rem] phone:text-[0.5rem] leading-3'>
                          &#x2022; RESTful API &#x2022; Firebase  &#x2022; GitHub &#x2022; Figma &#x2022; Jira &#x2022; Confluence 
                        </p>
                    </li>
                  </ul>
                <Education />
            </div>
          </div>
    </div>
  )
}

export default Resume