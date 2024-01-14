import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='content'>
       <div className='setting'>
        <span style={{fontSize: 30}}>Quiz Setting</span>
        </div> 
        <img className='banner' src="./quiz.svg" alt="quiz image" />
    </div>
  )
}

export default Home