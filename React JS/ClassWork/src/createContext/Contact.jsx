import React from 'react'
import { useContext } from 'react'
import { mycontext } from './Home'

const Contact = () => {

    const data = useContext(mycontext)
  return (
    <div>
      <h1>contact</h1>
    </div>
  )
}

export default Contact
