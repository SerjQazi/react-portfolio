import {React, useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';

import roboTrivia from '../../assets/robo_trivia.png';

const Portfolio = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;

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
  const desktop = 'uppercase text-center font-black tracking-widest text-slate-700 phone:text-xl sm:text-2xl lg:text-6xl xl:text-5xl 2xl:text-6xl py-6 phone:py-2'

  return (
      <div className='flex justify-center items-center bg-slate-100'>
        <div className="wrapper w-full lg:w-10/12 px-2 phone:h-auto sm:px-4 phone:px-0 phone:pr-2">

          <div className='mb-4'>

            <div className='flex flex-row-reverse justify-between sm:flex-col mt-4 mb-2 phone:mb-2 sm:mb-4'>
            <div className='absolute sm:static flex justify-center items-center border-2 border-dashed border-slate-700 border-opacity-50 ml-2 sm:mx-28 xl:mx-48 sm:mb-4 lg:mt-10 lg:mb-8'>
              <h1 className={width < breakpoint ? mobile : desktop}>
                Portfolio
              </h1>
            </div>
            {/* Header Content / UpperSection in here */}
          </div>

          <div className='mainContainer flex flex-col justify-center items-center text-slate-700'>
            
            <div className='roboTriviaContainer flex justify-center items-center mb-10'>
              <div className='w-1/3 hidden'>
                <img src={roboTrivia} alt="" />
              </div>

              <div className='infoContainer w-11/12 ml-4 mr-14 md:mr-0'>

                <div className=''>
                  <h2 className='font-bold text-2xl tracking-widest'>Robo Trivia</h2>
                  <h3 className='font-thin text-sm tracking-wide mb-4'>React | JavaScript | HTML5 | SASS | Firebase</h3>
                  <p className='font-thin text-lg tracking-normal md:mr-2'>A solo or multiplayer trivia game that uses an API to generate questions & multiple choice answers. A simpler second API is used to generate the avatars for each unique username and finally firebase stores all of the user data and assigns the score to each user's unique key.</p>
                </div>

                <div className='buttonContainer flex mt-4'>

                  <div className='w-fit px-4 py-1 rounded-lg bg-yellow-500'>
                  <Link 
                  target='_blank' 
                  to='https://github.com/robo-trivia-group/project-4-react' 
                  className='font-bold'>
                    Github
                  </Link>
                  </div>

                  <div className='w-fit px-4 py-1 rounded-lg bg-yellow-500 ml-6'>

                    <Link 
                    target='_blank' 
                    to='https://robo-trivia-react.netlify.app/'
                    className='font-bold'>
                      Live Link
                    </Link>
                  </div>

                </div>
              </div>

            </div>

            <div className='findMyBeerContainer flex justify-center items-center mb-0 md:mb-10'>
              <div className='w-1/3 hidden'>
                <img src={roboTrivia} alt="" />
              </div>

              <div className='infoContainer w-11/12 ml-4'>

                <div className=''>
                  <h2 className='font-bold text-2xl tracking-widest'>Find My Beer</h2>
                  <h3 className='font-thin text-sm tracking-wide mb-4'>React | JavaScript | HTML5 | SASS</h3>
                  <p className='font-thin text-lg tracking-normal'>A way to find all the breweries in your state, the API generates a list of breweries once you pick a state. The front of the card displays name and address, and as you hover over each card the back shows brewery type, contact info and brewery website.</p>
                </div>

                <div className='buttonContainer flex mt-4'>

                  <div className='w-fit px-4 py-1 rounded-lg bg-yellow-500'>
                  <Link 
                  target='_blank' 
                  to='https://github.com/SerjQazi/find-my-beer-project-3' 
                  className='font-bold'>
                    Github
                  </Link>
                  </div>

                  <div className='w-fit px-4 py-1 rounded-lg bg-yellow-500 ml-6'>

                    <Link 
                    target='_blank' 
                    to='https://find-my-beer.netlify.app/'
                    className='font-bold'>
                      Live Link
                    </Link>
                  </div>

                </div>
              </div>

            </div>

            <div className='helperContainer hidden md:flex justify-center items-center'>
              <div className='w-1/3 hidden'>
                <img src={roboTrivia} alt="" />
              </div>

              <div className='infoContainer w-11/12 ml-4'>

                <div className=''>
                  <h2 className='font-bold text-xl tracking-widest'>Sanctuary Helper</h2>
                  <h3 className='font-thin text-xs tracking-wide mb-2'>HTML5 | SASS</h3>
                  <p className='font-thin text-base tracking-wide'>A multi-page PSD coversion that is fully responsive on all screen sizes. The mobile and tablet size includes an aminated collapsing nav styled to pixel perfection with SASS.</p>
                </div>

                <div className='buttonContainer flex mt-4'>

                  <div className='w-fit px-4 py-1 rounded-lg bg-yellow-500'>
                  <Link 
                  target='_blank' 
                  to='https://github.com/serj-jordan-sanctuary-helper/project-one' 
                  className='font-bold'>
                    Github
                  </Link>
                  </div>

                  <div className='w-fit px-4 py-1 rounded-lg bg-yellow-500 ml-6'>

                    <Link 
                    target='_blank' 
                    to='https://serj-jordan-sanctuary-helper.github.io/project-one/'
                    className='font-bold'>
                      Live Link
                    </Link>
                  </div>

                </div>
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

export default Portfolio