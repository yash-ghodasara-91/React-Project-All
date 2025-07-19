import React from 'react'
import { useNavigate, useParams } from "react-router-dom";

const About = () => {4
  const navigate = useNavigate()

  const student = useParams()
  console.log(student);
  

  const handleBtn =()=>{
    navigate("/", {replace : true , state : {name : "Yash"} })
  }
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleBtn}>Go to Home</button>

    </div>
  )
}

export default About
