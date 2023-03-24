import {React, useState, useEffect} from 'react'
import { FaReact, SiJavascript, AiFillHtml5 } from 'react-icons/all'

import Education from './Education'

const Resume = () => {

  return (
    <div className=''>
      <h3 className='uppercase font-bold text-base phone:text-base sm:text-2xl lg:text-2xl 2xl:text-3xl text-slate-700 mb-2 phone:mb-1'>
        Experience
      </h3>

          <div className='text-slate-700 phone:grid grid-cols-2'>
            <div className='mb-3 phone:mb-0 phone:mr-2 lg:mr-6'>
              <h4 className='text-sm phone:text-[0.5rem] sm:text-xl lg:text-base xl:text-lg font-bold uppercase mb-1 phone:leading-3 xl:leading-6'>INTERMEDIATE FRONTEND DEVELOPER</h4>
              <p className='font-thin text-sm phone:text-xs mb-2 phone:mb-0.5 sm:text-lg lg:text-sm xl:text-base xl:mb-2'>
                Bank of Montreal - BMO
              </p>

                <ul className='text-xs phone:text-[0.5rem] sm:text-base lg:text-xs 2xl:text-base lg:font-thin'>
                  <li className='ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 xl:leading-4 2xl:leading-5 lg:mb-2 xl:mb-1 mr-10'>
                    <p>Built accessible & responsive web pages on BMO.com & BMOHarris.com</p>
                  </li>
                  <li className='ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 xl:leading-4 2xl:leading-5 lg:mb-2 xl:mb-1 mr-10'>
                    <p>Developed new React components and refactored existing components</p>
                  </li>
                  <li className='ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 xl:leading-4 2xl:leading-5 lg:mb-2 xl:mb-1 lg:mr-10'>
                    <p>Maintained a consistent design language using utility-first CSS frameworks, similar to Tailwind</p>
                  </li>
                  <li className='ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 xl:leading-4 2xl:leading-5 lg:mb-2 xl:mb-1'>
                    <p>Prepared deployment artifacts for QA, preview, and production environments daily using Python scripts & OpenText's WEM</p>
                  </li>
                  <li className='ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 xl:leading-4 2xl:leading-5 lg:mb-2 xl:mb-1'>
                    <p>Worked in an agile environment using Kanban methodologies</p>
                  </li>
                  <li className='ml-0 mt-4 phone:mt-1 xl:mt-4 2xl:mt-6'>
                    <p className='font-bold text-sm phone:text-[0.6rem] lg:text-xs xl:text-sm leading-5'>Tech Stack :</p>
                      <p className='ml-2 flex justify-start items-center text-[0.7rem] phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] 2xl:text-sm leading-4 lg:leading-5 phone:leading-4'>
                        &#x2022; React &#x2022; JavaScript &#x2022; HTML5 &#x2022; Tailwind &#x2022; RESTful API &#x2022; Bitbucket 
                      </p>
                      <p className='ml-2 flex justify-start items-center text-[0.7rem] phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] 2xl:text-sm leading-4 lg:leading-5 phone:leading-4'>
                        &#x2022; Figma &#x2022; Agile Methodologies (Rally & Confluence)
                      </p>
                  </li>
                </ul>
            </div>
            
            <div className='mb-3 phone:mb-0 sm:mb-0'>
              <h4 className='text-sm phone:text-[0.5rem] font-bold uppercase mb-1 phone:leading-3 xl:leading-6 sm:text-xl lg:text-base xl:text-lg'>FRONTEND DEVELOPER</h4>
              <p className='font-thin text-sm phone:text-xs mb-2 phone:mb-0.5 sm:text-lg lg:text-sm xl:text-base xl:mb-2'>Novela Neurotechnologies</p>


                  <ul className='text-xs phone:text-[0.5rem] sm:text-base lg:text-xs 2xl:text-base lg:font-thin'>
                    <li className=' ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 xl:leading-4 2xl:leading-5 lg:mb-2'>
                      <p>Built components with React and JavaScript to integrate API data in an intuitive UX design</p>
                    </li>
                    <li className=' ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 xl:leading-4 2xl:leading-5 lg:mb-2'>
                      <p>Refactored existing web application to be fully mobile compatible</p>
                    </li>
                    <li className=' ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 xl:leading-4 2xl:leading-5 lg:mb-2'>
                      <p>Designed a new application using Figma</p>
                    </li>
                    <li className=' ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 xl:leading-4 2xl:leading-5 lg:mb-2'>
                      <p>Developed the new application using React, Material UI and Ant Design</p>
                    </li>
                    <li className=' ml-6 phone:ml-4 list-disc mb-1 phone:mb-0 phone:leading-3 xl:leading-4 2xl:leading-5 lg:mb-2'>
                      <p>Created API schemas for new APIs</p>
                    </li>
                    <li className='ml-0 mt-4 phone:mt-1 xl:mt-4 2xl:mt-6'>
                      <p className='font-bold text-sm phone:text-[0.6rem] lg:text-xs xl:text-sm leading-5'>Tech Stack :</p>
                        <p className='flex justify-start items-center text-[0.7rem] phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] 2xl:text-sm leading-4 phone:leading-4 lg:leading-5'>
                          &#x2022; React &#x2022; JavaScript &#x2022; HTML5 &#x2022; CSS3 &#x2022; SASS &#x2022; Material UI &#x2022; Ant Design 
                        </p>
                        <p className='flex justify-start items-center text-[0.7rem] phone:text-[0.5rem] sm:text-sm lg:text-[0.7rem] 2xl:text-sm leading-4 phone:leading-4 lg:leading-5'>
                          &#x2022; RESTful API &#x2022; Firebase  &#x2022; GitHub &#x2022; Figma &#x2022; Jira &#x2022; Confluence 
                        </p>
                    </li>
                  </ul>
                {/* <Education /> */}
            </div>
          </div>
    </div>
  )
}

export default Resume