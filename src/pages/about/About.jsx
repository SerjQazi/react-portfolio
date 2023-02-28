import React from 'react';
import Skills from './Skills';
import figmaIcon from '../../assets/icons/figmaDesign.png'
import webIcon from '../../assets/icons/webDesign.png'

const About = () => {
  return (
      <div className='flex justify-center bg-slate-100'>
        <div className="wrapper w-10/12">
          <div className='flex justify-center items-center border-2 border-dashed border-slate-700 border-opacity-50 mt-10 mb-8'>
            <h1 className='uppercase text-center font-black tracking-widest text-slate-700 text-9xl 2xl:text-8xl py-6'>
              About Me
            </h1>
          </div>

          <div className='text-slate-700 font-thin mb-6'>
            <h2 className='text-2xl mb-6 font-light tracking-wide'>I'm <span className='font-black'>Serj Qazi,</span> Frontend Developer / Graphic Designer</h2>

            <p className='tracking-wide'>Frontend Developer with years of experience in building accessible and responsive web pages using React. I have worked with RESTful APIs, Git, and Figma, and have experience in agile methodologies such as Kanban, Jira, and Confluence. Additionally, I have experience with Material-UI, Ant Design, Tailwind, and Firebase, and have worked on projects in small and large team environments.</p>
          </div>

          <div className="grid grid-cols-3">
            
            <div className="col-span-2 bg-slate-700 drop-shadow-lg">
              <Skills />              
            </div>

            <div className="text-slate-700 font-thin col-span-1 py-2 pl-8">
              <h3 className='text-2xl mb-6 font-bold'>
                What I Do?
              </h3>

              <div className="mb-4 flex">
                
                <div className="w-1/3 image">
                  <img src={webIcon} alt="" />
                </div>

                <div className="w-2/3 ml-6 text">
                  <h3 className='font-bold mb-1'>Web Design</h3>
                  <p className='text-sm'>
                    Manage / build new content for existing web pages and applications using JavaScript and React.
                    </p>
                </div>
              </div>

              <div className="mb-4 flex">
                
                <div className="w-1/3 image">
                  <img src={figmaIcon} alt="" />
                </div>

                <div className="w-2/3 ml-6 text">
                  <h3 className='font-bold mb-1'>Figma Design</h3>
                  <p className='text-sm'>
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