import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'

const Display = () => {
    const navigate = useNavigate();

    const [record ,setRecord] = useState(null)

    useEffect(()=>{
        let allData = JSON.parse(localStorage.getItem("task")) || []
        setRecord(allData)
    },[])

  return (
    <div>
      <h1>Display</h1>
      <button onClick={()=> navigate ("/Create")}>Create</button>

      {
        record ? 
        record.map((e,i)=>{
            return <ul key={i}>
                <li>{i+1}</li>
                <li>{e.taskName}</li>
                <li>{e.prority}</li>
            </ul>
        }) : <p>Np Data</p>
      }
    </div>
  )
}

export default Display
