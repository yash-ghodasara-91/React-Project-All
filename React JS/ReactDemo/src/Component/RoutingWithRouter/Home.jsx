import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const Home = () => {

  const data = useLocation()
  console.log(data?.state?.name);

  const student = "Darshan"

  
  return (
    <div>
      <h1>Home</h1>
    <Link to={`/About/${student}`}> go to About</Link>
    <Link to={"/Contact"}> go to Contact</Link>

       
       
    </div>
  )
}

export default Home
