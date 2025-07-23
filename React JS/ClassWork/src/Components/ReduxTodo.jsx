import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../features/TodoSlice'

const ReduxTodo = () => {
  const [formData, setFormData] = useState({})
  const [editIndex, setEditIndex] = useState(null)

  const dispatch = useDispatch()

  const Data = useSelector((state) => {
    return state.todokey.Data
  })

  const handleChanges = ((e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  })

  const handleAddData = ((e) => {
    e.preventDefault();

    if (editIndex == null) {
      let obj = { id: Date.now(), ...formData }
      dispatch(addData(obj))
    } else {
      dispatch(updateData({ id: editIndex, formData }))
    }

    setEditIndex(null)
    setFormData({
      name: "",
      Subject: ""
    })
  })

  const handleDelete = ((id) => {
    dispatch(deleteData(id))
  })

  const handleEdit = ((id) => {
    let singleData = Data.find((item) => item.id == id)
    setFormData({
      name: singleData.name,
      Subject: singleData.Subject
    })
    setEditIndex(id)
  })

  return (
    <div>
      <h1>CRUD PRAKTISH REDUX</h1>

      <form onSubmit={handleAddData}>
        <input type="text" name='name' value={formData.name} placeholder='Enter Name' onChange={handleChanges} />
        <input type="text" name='Subject' value={formData.Subject} placeholder='Enter Subject' onChange={handleChanges} />
        <button type='submit'>{editIndex == null ? "Add data" : "Update Data"}</button>
      </form>

      {
        Data.map((e, i) => {
          return <ul key={i}>
            <li>{i + 1}</li>
            <li>{e.id}</li>
            <li>{e.name}</li>
            <li>{e.Subject}</li>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
            <button onClick={() => handleEdit(e.id)}>Edit</button>
          </ul>
        })
      }
    </div>
  )
}

export default ReduxTodo
