import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../features/TodoSlice';
import { useState } from 'react';

const TodoRedux = () => {

  const [name, setname] = useState("")
  const [subject, setSubject] = useState("")

  const [editIndex, setEditIndex] = useState(null)

  const dispatch = useDispatch()

  const data = useSelector((state) => {
    return state.todoKey.data
  });

  const handleAddData = () => {
    if (editIndex == null) {
      let obj = { id: Date.now(), name, subject }
      dispatch(addData(obj))
    } else {
      dispatch(updateData({ id: editIndex, name, subject }))
    }
    setname("")
    setSubject("")
    setEditIndex(null)
  }

  const handleDelete = (id) => {
  dispatch(deleteData(id))
  }

  const handleEdit = (id) => {
    const singleData = data.find((item) => item.id == id)

    setname  (singleData.name),
    setSubject  (singleData.subject)

    setEditIndex(id)
  }

  return (
    <div>
      <h1>TodoRedux</h1>
      <input type="text" placeholder='Enter Your Name' onChange={(e) => setname(e.target.value)} value={name} />
      <input type="text" placeholder='Enter Your Subject' onChange={(e) => setSubject(e.target.value)} value={subject} />
      <button onClick={handleAddData}>{editIndex == null ? "Add Data" : "Update Data"}</button>

      {
        data &&
        data.map((e, i) => {
          return <ul key={i}>
            <li>{i + 1}</li>
            <li>{e.name}</li>
            <li>{e.subject}</li>
            <button onClick={()=>handleDelete(e.id)}>Delete</button>
            <button onClick={()=>handleEdit(e.id)}>Edit</button>
          </ul>
        })
      }
    </div>
  )
}

export default TodoRedux
