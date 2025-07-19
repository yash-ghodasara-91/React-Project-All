import React, { useEffect, useState } from 'react'

const Crud = () => {
  const [formData, setFormData] = useState({})
  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState(null)


  useEffect(()=>{
    let getData = JSON.parse(localStorage.getItem("Student")) || []
    setRecord(getData)
  })

  const handleChanges = ((e)=>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  })

  const handleSubmit = ((e)=>{
    e.preventDefault();
    if (editIndex == null) {
      let obj = {id : Date.now(), ...formData}
    setRecord([...record, obj])
    localStorage.setItem("Student", JSON.stringify([...record,obj]))
    } else {
        const singleData = record.find((item) => item.id == editIndex)
        singleData.name = formData.name  
        singleData.subject = formData.subject
        localStorage.setItem("Student", JSON.stringify(record))
    }

    setEditIndex(null)
    setFormData({
      name : "",
      subject : ""
    })
  })

  const handleDelete = ((id)=>{
    const newData = record.filter((item)=> item.id != id)
    setRecord (newData)
    localStorage.setItem("Student", JSON.stringify(newData))
  })

  const handleEdit =((id)=>{
    const singleData = record.find((item) => item.id == id)
    setFormData({
      name : singleData.name,
      subject : singleData.subject
    })
    setEditIndex(id)
  })
  return (
    <div>
      <h1>Crud</h1>
      <form onSubmit={handleSubmit}> 
        <input type="text" name='name' value={formData.name} placeholder='Enter Your name' onChange={handleChanges} />
        <input type="text" name='subject' value={formData.subject} placeholder='Enter Your Subject' onChange={handleChanges} />

        <button type='Submit'>{editIndex == null ? "Submit" : "Update"}</button>
      </form>

      {
        record ? 
        record.map((e,i)=>{
          return <ul key={i}>
            <li>{i+1}</li>
            <li>{e.id}</li>
            <li>{e.name}</li>
            <li>{e.subject}</li>
            <button onClick={()=> handleDelete(e.id)}>Delete</button>
            <button onClick={()=> handleEdit(e.id)}>Edit</button>
          </ul>
        }) : <p>No Data </p>
      }
    </div>
  )
}

export default Crud
