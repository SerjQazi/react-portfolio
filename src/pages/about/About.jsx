import {React, useState, useEffect} from 'react'
import Skills from './Skills';
import figmaIcon from '../../assets/icons/figmaDesign.png'
import webIcon from '../../assets/icons/webDesign.png'

const About = () => {

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
      <div className='flex justify-center bg-slate-100 phone:ml-2'>
        <div className="wrapper w-full lg:w-10/12 px-2">

          <div className='flex flex-row-reverse justify-between phone:flex-col mt-4 mb-2'>
            <div className='flex justify-center items-center border-2 border-dashed border-slate-700 border-opacity-50 ml-2 phone:mx-28 phone:mb-4 lg:mt-10 lg:mb-8'>
              <h1 className={width < breakpoint ? mobile : desktop}>
                About Me
              </h1>
            </div>

            <div className='text-slate-700 font-thin'>
              <div className="text-lg lg:text-2xl mb-2 lg:mb-6 font-light tracking-wide leading-5 phone:flex justify-start items-center">

                <h2 className='mb-1 phone:mb-0 phone:text-base'>
                  I'm <span className='font-black'>Serj Qazi,</span> 
                </h2>
                <h2 className='text-xs phone:text-base font-thin underline underline-offset-4 phone:no-underline phone:ml-1'>
                  Frontend Developer / Graphic Designer
                </h2>
              </div>
              {
                width < breakpoint ?
                <>
                  <h4 className='font-bold text-[0.8rem] mt-4 mb-2'>Experienced in:</h4>
                  <ul className='text-xs phone:text-[0.5rem] tracking-wide ml-6'>
                    <li className='list-disc mb-1'>
                      <p><span className='font-bold'>Accessible</span> and <span className='font-bold'>responsive </span>page builds.</p>
                    </li>
                    <li className='list-disc mb-1'>
                      <p><span className='font-bold'>RESTful APIs, Git,</span> and <span className='font-bold'>Figma,</span></p>
                    </li>
                    <li className='list-disc mb-1'>
                      <p>Agile method - <span className='font-bold'>Kanban, Jira,</span> & <span className='font-bold'>Confluence.</span></p>
                    </li>
                    <li className='list-disc mb-1'>
                      <p><span className='font-bold'>Material-UI, Ant Design, Tailwind,</span> and <span className='font-bold'>Firebase</span></p>
                    </li>
                  </ul>
                </>
              : <p className='text-xs phone:text-[0.5rem] tracking-wide ml-2 phone:ml-0'>
                A Frontend Developer with years of experience in building accessible and responsive web pages using <span className='font-bold'>React.</span> I have worked with <span className='font-bold'>RESTful APIs, Git,</span> and <span className='font-bold'>Figma,</span> and have experience in agile methodologies such as <span className='font-bold'>Kanban, Jira,</span> and <span className='font-bold'>Confluence.</span> Additionally, I have experience with <span className='font-bold'>Material-UI, Ant Design, Tailwind,</span> and <span className='font-bold'>Firebase,</span> and have worked on projects in small and large team environments.
              </p>
              }
              
            </div>
          </div>

          

          <div className="flex flex-col-reverse phone:grid grid-cols-3 phone:grid-cols-4">
            
            <div className="col-span-2 phone:col-span-3 bg-slate-700 drop-shadow-lg mb-4">
              <Skills />              
            </div>

            <div className="text-slate-700 font-thin col-span-1 phone:pl-2 lg:pl-8">
              <h3 className='text-lg lg:text-2xl mb-2 phone:mb-3 font-bold'>
                What I Do?
              </h3>

              <div className="mb-3 phone:mb-6 ml-2 phone:ml-0 flex phone:items-center">
                
                <div className="image w-20 phone:w-10 lg:w-1/3 flex justify-center items-center">
                  <img src={webIcon} alt="" />
                </div>

                <div className="w-2/3 phone:w-fit ml-6 phone:ml-2 text">
                  <h3 className='font-bold text-sm phone:text-[0.7rem] lg:text-base mb-1'>Development</h3>
                  <p className='text-xs lg:text-sm phone:hidden lg:block'>
                    Manage / build new content for existing web pages and applications using JavaScript and React.
                  </p>
                </div>
              </div>

              <div className="mb-4 ml-2 phone:ml-0 flex phone:items-center">
                
                <div className="image w-20 phone:w-10  lg:w-1/3 flex justify-center items-center">
                  <img src={figmaIcon} alt="" />
                </div>

                <div className="w-2/3 phone:w-fit ml-6 phone:ml-2 text">
                  <h3 className='font-bold text-sm phone:text-[0.7rem] lg:text-base mb-1'>Figma Design</h3>
                  <p className='text-xs lg:text-sm phone:hidden lg:block'>
                    Build protortypes of web pages and applications from scratch using figma and other design tools.
                    </p>
                </div>
              </div>
            </div>

          </div>
          {/* end of lower section */}
        </div>
        {/* end of wrapper */}
      </div> 
  )
}

export default About