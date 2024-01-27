import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import About from './About'

const Home = () => {
    const navigate=useNavigate();
    function goNext()
    {
        navigate("/about");
    }
  return (
    <div>
      <h2>this is home page</h2>
      <button onClick={goNext}>Next</button>
    </div>
  )
}

export default Home
