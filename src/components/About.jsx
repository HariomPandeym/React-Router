import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate();
    function next()
    {
        navigate("/support");
    }
    function back()
    {
        navigate(-1);
    }
  return (
    <div>
      <h2>this is about page</h2>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  )
}

export default About
