import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function JsonApi() {
  const [record, setRecord] = useState([]);
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    await axios.get("http://localhost:1008/users").then((data) => {
      setRecord(data.data)
    })
  }

  const handleAddData = async () => {
    if (editIndex == null) {
      await axios.post("http://localhost:1008/users", { name, subject }).then((res) => {
        setRecord([...record, { name, subject }])
      })
    } else {
      await axios.put(`http://localhost:1008/users/${editIndex}`, { name, subject }).then((res) => {
        const updateData = record.find((item)=>item.id == editIndex, {name,subject})
      })
    }

    setName("")
    setSubject("")
    setEditIndex(null)
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:1008/users/${id}`).then((res) => {
      let newRecord = record.filter((item) => item.id != id)
      setRecord(newRecord)
    })
  }

  const handleEdit = (id) => {
    let singleData = record.find((item) => item.id == id)
    setName(singleData.name);
    setSubject(singleData.subject)
    setEditIndex(id)
  }

  return (
    <div>
      <h1>Api</h1>

      <input type="text" placeholder='Enter ypur name' onChange={(e) => setName(e.target.value)} value={name} />
      <input type="text" placeholder='Enter ypur subject' onChange={(e) => setSubject(e.target.value)} value={subject} />

      <button onClick={handleAddData}>{editIndex == null ? "Add Data" : "Update Data"}</button>

      {
        record &&
        record.map((e, i) => {
          return <ul key={i}>
            <li>{e.name}</li>
            <li>{e.subject}</li>

            <button onClick={()=>handleEdit(e.id)}>Edit</button>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </ul>
        })
      }
    </div>
  )
}
