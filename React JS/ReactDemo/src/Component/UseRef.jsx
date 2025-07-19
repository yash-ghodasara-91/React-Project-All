import React, { useRef } from 'react'

const UseRef = () => {
    const nameRef = useRef()
    const handleClick = ()=>{
        console.log(nameRef.current.value);
        
    }
  return (
    <div>
      <h1>UseRef</h1>
      <input type="text" ref={nameRef} placeholder='Enter your Name'/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseRef
