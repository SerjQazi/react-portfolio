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
      <h3 className='uppercase font-bold text-slate-700 text-base mb-4 phone:mb-1'>
        Education
      </h3>

      <div className='phone:grid grid-cols-3'>
        <div className="text-slate-700">
          <h4 className='text-sm phone:text-[0.5rem] font-bold uppercase mb-2 phone:mb-1 phone:leading-3'>Frontend Development</h4>
          <p className='font-thin text-sm phone:text-xs mb-2 phone:mb-0.5'>Juno College Of Technology</p>
          <ul className='ml-6 text-xs phone:text-[0.5rem]'>
            <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
              <p>Frontend Web Development</p>
            </li>
            <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
              <p>Intro to JavaScript</p>
            </li>
            <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
              <p>Intro to HTML5 & CSS3</p>
            </li>
          </ul>
        </div>

        <div className='hidden phone:block'>
          <h4 className='text-sm phone:text-[0.5rem] font-bold uppercase mb-2 phone:mb-1 phone:leading-3'>Tech Stack</h4>
          <ul className='ml-6 text-xs phone:text-[0.5rem]'>
            <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
              <p>React (Hooks & Classes)</p>
            </li>
            <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
              <p>JavaScript ES6+</p>
            </li>
            <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
              <p>HTML5, CSS3, SASS</p>
            </li>
            <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
              <p>Material UI & Ant Design</p>
            </li>
          </ul>
        </div>

        <div className='hidden phone:block'>
          
          <ul className='ml-6 text-xs phone:text-[0.5rem] mt-4'>
            <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
              <p>RESTful APIs & Firebase</p>
            </li>
            <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
              <p>BitBucket & GitHub collaboration</p>
            </li>
            <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
              <p>Figma prototypes - UI/UX</p>
            </li>
            <li className='list-disc mb-1 phone:mb-0 phone:leading-3'>
              <p>Photoshop & Illustrator</p>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  )
}

export default Resume