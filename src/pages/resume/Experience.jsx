import {React, useState, useEffect} from 'react'


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
      <h3 className='uppercase font-bold text-base text-slate-700 mb-4 phone:mb-1'>
        Experience
      </h3>

          <div className='text-slate-700 phone:grid grid-cols-2'>
            <div className='mb-4 phone:mr-2'>
              <h4 className='text-sm phone:text-[0.5rem] font-bold uppercase mb-2 phone:mb-1 phone:leading-3'>INTERMEDIATE FRONTEND DEVELOPER</h4>
              <p className='font-thin text-sm phone:text-xs mb-2 phone:mb-0.5'>
                Bank of Montreal - BMO
              </p>

              {
                width < breakpoint ?
                <ul className='ml-6 text-xs phone:text-[0.5rem]'>
                  <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
                    <p>Built accessible & responsive web pages on BMO.com & BMOHarris.com</p>
                  </li>
                  <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
                    <p>Developed new React components and optimize existing ones</p>
                  </li>
                  <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
                    <p>Maintained a consistent design language using utility-first CSS frameworks, similar to Tailwind</p>
                  </li>
                  <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
                    <p>Used advanced git workflows to collaborate on complex codebases among a large development team</p>
                  </li>
                  <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
                    <p>Prepared deployment artifacts & successfully deployed web pages and other assets to QA, preview, and production servers on a daily basis using Python scripts & OpenText's WEM</p>
                  </li>
                  <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
                    <p>Worked in an agile environment using Kanban methodologies to ensure optimal performance & productivity</p>
                  </li>
                </ul>
                :
                <p className='font-thin text-[0.5rem]'> Developed new React components and optimized existing ones while maintaining a consistent design language using utility-first CSS frameworks. Collaborated with a large development team using advanced git workflows to prepare deployment artifacts and successfully deployed web pages and other assets to QA, preview, and production servers on a daily basis using Python scripts and OpenText's WEM. Additionally, worked in an agile environment using Kanban methodologies to ensure optimal performance and productivity.</p>
              }
              
            </div>
            
            <div className='mb-4'>
              <h4 className='text-sm phone:text-[0.5rem] font-bold uppercase mb-2 phone:mb-1 phone:leading-3'>FRONTEND DEVELOPER</h4>
              <p className='font-thin text-sm phone:text-xs mb-2 phone:mb-0.5'>Novela Neurotechnologies</p>

              {
                width < breakpoint ?
                  <ul className='ml-6 text-xs phone:text-[0.5rem] '>
                    <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
                      <p>Built components with React and JavaScript to integrate API data in an intuitive UX design</p>
                    </li>
                    <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
                      <p>Rebuilt existing web application to be fully mobile compatible</p>
                    </li>
                    <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
                      <p>Designed and Developed a new application using Figma & React</p>
                    </li>
                    <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
                      <p>Created API schemas for new APIs</p>
                    </li>
                  </ul>
                  :
                  <p className='font-thin text-[0.5rem]'>Built components with React and JavaScript to integrate API data in an intuitive UX design, rebuilding existing web applications to be fully mobile-compatible, adding responsiveness features to existing React applications, and designing and developing a new application using Figma and React. Created API schemas for new APIs and worked with RESTful APIs, Git, among other tools. Additionally, I worked with Material-UI, Ant Design, and Firebase, and have worked on projects that involved responsive web design.</p>
              }
            </div>
          </div>
    </div>
  )
}

export default Resume