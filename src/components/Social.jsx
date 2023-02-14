import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { linkedin, twitter, github, myresume, pdf, pdfYellow, githubYellow, twitterYellow, linkedinYellow } from '../assets/';


const Social = () => {

  const [linkedinIcon, setLinkedinIcon] = useState(linkedin);
  const [twitterIcon, setTwitterIcon] = useState(twitter);
  const [gitHubIcon, setGitHubIcon] = useState(github);
  const [pfdIcon, setPdfIcon] = useState(pdf);

  return (
    <div >
      <ul className='flex flex-nowrap justify-center align-middle'>
        

        <li className='flex justify-center align-middle w-full cursor-pointer border-r-2 border-slate-700'
          onMouseOver={() => setLinkedinIcon(linkedinYellow)}
          onMouseOut={() => setLinkedinIcon(linkedin)}
        >
          <Link className='px-10 py-2 hover:scale-110 duration-300' to='https://www.linkedin.com/in/serjqazi/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedinIcon} alt="Serj Qazi linkedin profile" />
          </Link>
        </li>

        <li className='flex justify-center align-middle w-full cursor-pointer border-r-2 border-slate-700' 
          onMouseOver={() => setGitHubIcon(githubYellow)}
          onMouseOut={() => setGitHubIcon(github)}
        >
          <Link className='px-10 py-2 hover:scale-110 duration-300' to='https://github.com/SerjQazi' target='_blank' rel='noopener noreferrer'>
            <img src={gitHubIcon} alt="Serj Qazi GitHub profile" />
          </Link>
        </li>

        <li className='flex justify-center align-middle w-full cursor-pointer border-r-2 border-slate-700'
          onMouseOver={() => setTwitterIcon(twitterYellow)}
          onMouseOut={() => setTwitterIcon(twitter)}
        >
          <Link className='px-10 py-2 hover:scale-110 duration-300' to='https://twitter.com/qazi_serj' target='_blank' rel='noopener noreferrer'>
            <img src={twitterIcon} alt="Serj Qazi twitter" />
          </Link>
        </li>

        <li className='flex justify-center align-middle w-full cursor-pointer'
          onMouseOver={() => setPdfIcon(pdfYellow)}
          onMouseOut={() => setPdfIcon(pdf)}
          >
          <Link className='px-10 py-2 hover:scale-110 duration-300' to={myresume} target='_blank' rel='noopener noreferrer'>
            <img src={pfdIcon} alt="Serj Qazi resume pdf"/>
          </Link>
        </li>


      </ul>
    </div>
  )
}

export default Social