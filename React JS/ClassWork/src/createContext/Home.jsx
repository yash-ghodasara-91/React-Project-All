import React from 'react'
import { createContext } from 'react'
import Contact from './Contact'

export const mycontext = createContext()

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <mycontext.Provider value={"Yash ghodasara"}>
        <Contact/>
      </mycontext.Provider>
    </div>
  )
}

export default Home
