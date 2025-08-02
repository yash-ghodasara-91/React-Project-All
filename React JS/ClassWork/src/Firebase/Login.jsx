
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig.JS'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
        const navigate = useNavigate()

    const handlesignIn= async () => {
      await signInWithEmailAndPassword(auth,email,password).then((res) => {
            navigate("/desboard")
      })
    }
  return (
    <div>
      
      <h1>Sign In</h1>
      <input type="text" placeholder='Enter Name' onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handlesignIn}> sign In</button>

      <Link to={"/"}>Sign Up</Link>
    </div>
  )
}

export default Login
