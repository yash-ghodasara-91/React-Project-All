import React, { useEffect, useState } from 'react'

const Crud = () => {
    // const [formData, setFormData] = useState({})
    // const [record, setRecord] = useState([])
    // const [editIndex, setEditIndex] = useState(null)

    // useEffect(() => {
    //     let alldata = JSON.parse(localStorage.getItem("Student")) || [];
    //     setRecord(alldata)
    // }, [])

    // const handleChange = ((e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     })
    // })

    // const handleSubmit = ((e) => {
    //     e.preventDefault();
    //     if (editIndex == null) {
    //         let obj = { id: Date.now(), ...formData }
    //         setRecord([...record, obj])
    //         localStorage.setItem("Student", JSON.stringify([...record, obj]))
    //     }else {
    //     const singleData = record.find((item) => item.id == editIndex)
    //         singleData.name = formData.name;
    //         singleData.subject = formData.subject
    //         localStorage.setItem("Student", JSON.stringify(record))

    //     }
    //     setEditIndex(null)
    //     setFormData({
    //         name : "",
    //         subject : ""
    //     })
    // })

    // const handleDelet = ((id) => {
    //     let newdata = record.filter(item => item.id != id)
    //     setRecord(newdata)
    //     localStorage.setItem("Student", JSON.stringify(newdata))
    // })

    // const handleEdit = (id) => {
    //     const sigleData = record.find((item) => item.id == id)
    //     setFormData({
    //         name: sigleData.name,
    //         subject: sigleData.subject
    //     })
    //     setEditIndex(id)

    // }
    // return (
    //     <div>
    //         <h1 >Crud</h1>
    //         <form action="" onSubmit={handleSubmit}>
    //             <input type="text" value={formData.name} name="name" placeholder='Enter your name ' onChange={handleChange} />
    //             <input type="text" name='subject' value={formData.subject} placeholder='Enter your Subject ' onChange={handleChange} />
    //             <button type='Submit'>{editIndex == null ? "Submit" : "Update"}</button>
    //         </form>

    //         {
    //             record ?
    //                 record.map((e, i) => {
    //                     return <ul key={i}>
    //                         <li>{e.id}</li>
    //                         <li>{e.name}</li>
    //                         <li>{e.subject}</li>
    //                         <button onClick={() => handleDelet(e.id)}>Delete</button>
    //                         <button onClick={() => handleEdit(e.id)}>Edit</button>
    //                     </ul>
    //                 }) : <p>Not Record</p>
    //         }
    //     </div>
    // )
}

export default Crud
