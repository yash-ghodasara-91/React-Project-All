import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function JsonApi() {
  const [formData, setFormData] = useState({
    name: "",
    subject: ""
  })
  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    await axios.get("http://localhost:1008/users").then((data) => {
      setRecord(data.data)
    })
  }

  const handleAddData = async (e) => {
    e.preventDefault();

    if (editIndex == null) {
      await axios.post("http://localhost:1008/users", formData).then((res) => {
        setRecord([...record, res.data])
      })
    } else {
      await axios.put(`http://localhost:1008/users/${editIndex}`, formData).then((res) => {
        let singleData = record.find((item) => item.id == editIndex)
        singleData.name = formData.name,
          singleData.subject = formData.subject
        setRecord(record)
      })
    }
    setEditIndex(null)
    setFormData({
      name: "",
      subject: ""
    })
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:1008/users/${id}`).then((res) => {
      let newData = record.filter((item) => item.id != id)
      setRecord(newData)
    })
  }

  const handleEdit = (id) => {
    let singleData = record.find((item) => item.id == id)
    setFormData({
      name: singleData.name,
      subject: singleData.subject
    })
    setEditIndex(id)
  }

  return (
    <div>
      <h1>JsonApi</h1>

      <form onSubmit={handleAddData}>
        <input type="text" placeholder='Enter your name' name='name' value={formData.name} onChange={handleChange} />
        <input type="text" placeholder='Enter your subject' name='subject' value={formData.subject} onChange={handleChange} />

        <button type='submit'>{editIndex == null ? "Add Data" : "Update Data"}</button>
      </form>

      {
        record &&
        record.map((e, i) => {
          return <ul key={i}>
            <li>{i + 1}</li>
            <li>{e.name}</li>
            <li>{e.subject}</li>

            <button onClick={() => handleEdit(e.id)}>Edit</button>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </ul>
        })
      }
    </div>
  )
}