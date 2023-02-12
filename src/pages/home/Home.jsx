import React from 'react'
import selfPortrait from '../../assets/selfPortrait.jpg'

const Home = () => {
  return (
    <div className='homepage'>
      <div className="leftSide">

      Home Page
      </div>
      <div className="rightSide">
        <div className="portrait">
          <img className="img" src={selfPortrait} alt="" />
        </div>

      {/* <p class='font-cursive'>SERJ QAZI</p> */}
      </div>
    </div>
  )
}
export default Home