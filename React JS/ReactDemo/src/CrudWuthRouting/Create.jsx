import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate()

    const [taskName, setTaskName]= useState("")
    const [prority, setPrority] = useState("")

    const handleTask = ()=>{
        let obj = {id:Date.now(), taskName,prority}
        let oldData = JSON.parse(localStorage.getItem("task")) || []
        localStorage.setItem("task", JSON.stringify([...oldData,obj]))

        setPrority("")
        setTaskName("")

        navigate("/")
    }
  return (
    <div>
       <h1>Create</h1>

    <input type="task" value={taskName} placeholder='Enter task name' onChange={(e)=>setTaskName(e.target.value)} />

    <select onChange={(e)=>setPrority(e.target.value)} value={prority}>
        <option hidden> Select Priority</option>
        <option value={"low"}> Low</option>
        <option value={"medium"}> Medium</option>
        <option value={"hide"}> Hide</option>
    </select>
    <button onClick={handleTask}>Add Task</button>
    </div>
  )
}

export default Create
