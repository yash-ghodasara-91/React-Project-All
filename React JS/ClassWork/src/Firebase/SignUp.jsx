import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig.JS'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig.JS'

const SignUp = () => {
  const [name, setName] = useState("")
  const [age, setage] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSignUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), {
        name, age, email
      })
    })
    navigate("/login")
  }
  return (
    <div>

      <h1>Sign Up</h1>
      <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Enter sge' onChange={(e) => setage(e.target.value)} />
      <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleSignUp}> sign Up</button>

      <Link to={"/login"}>login </Link>
    </div>
  )
}

export default SignUp
