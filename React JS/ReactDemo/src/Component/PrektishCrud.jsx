// import React, { useEffect, useState } from 'react'

// const PrektishCrud = () => {
//     const [formData, setFormData] = useState({})
//     const [record, setRecord] = useState([])
//     const [editIndex, setEditIndex] = useState(null)


//     useEffect(() => {
//         const getData = JSON.parse(localStorage.getItem("Student")) || []
//         setRecord(getData)
//     }, [])

//     const handleChanges = ((e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     })

//     const handleSubmit = ((e) => {
//         e.preventDefault();
//         if (editIndex == null) {
//             let obj = { id: Date.now(), ...formData }
//             setRecord([...record, obj])
//             localStorage.setItem("Student", JSON.stringify([...record, obj]))
//         } else {
//             let singleDeta = record.find((item)=> item.id == editIndex)
//             singleDeta.name = formData.name
//             singleDeta.Subject = formData.Subject
//             localStorage.setItem("Student", JSON.stringify(record))
//         }



//         setEditIndex(null)
//         setFormData({
//             name: "",
//             Subject: ""
//         })
//     })

//     const handldelete = ((id) => {
//         const newData = record.filter((item) => item.id != id)
//         setRecord(newData)
//         localStorage.setItem("Student", JSON.stringify(newData))
//     })

//     const handleEdit = ((id) => {
//         let singleDeta = record.find((item)=> item.id == id)
//         setFormData({
//            name: singleDeta.name,
//            subject: singleDeta.subject
//         })

//         setEditIndex(id)
//     })

//     return (
//         <div>
//             <h1>Prektish Crud</h1>
//             <form action="" onSubmit={handleSubmit}>
//                 <input type="text" 
//                 name='name' 
//                 value={formData.name} 
//                 placeholder='Enter Your Name' 
//                 onChange={handleChanges} />

//                 <input type="text" 
//                 name='Subject' 
//                 value={formData.Subject} 
//                 placeholder='Enter Your Subject' 
//                 onChange={handleChanges} />

//                 <button type='submit'>{editIndex == null ? "Submit" : "Update"}</button>
//             </form>


//             {
//                 record ?
//                     record.map((e, i) => {
//                         return <ul key={i}>
//                             <li>{i + 1}</li>
//                             <li>{e.id}</li>
//                             <li>{e.name}</li>
//                             <li>{e.Subject}</li>
//                             <button onClick={() => handldelete(e.id)}>Delete</button>
//                             <button onClick={() => handleEdit(e.id)}>Edit</button>
//                         </ul>
//                     }) : <p>No Data </p>
//             }
//         </div>
//     )
// }

// export default PrektishCrud



//  



// import React, { useEffect, useState } from 'react'

// const PrektishCrud = () => {

//     const [formData, setFormData] = useState({})
//     const [record, setRecord] = useState([])
//     const [editIndex, setEditIndex] = useState(null)


//     useEffect(() => {
//         const getData = JSON.parse(localStorage.getItem("Student")) || []
//         setRecord(getData)
//     }, [])

//     const handleChangs = ((e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     })

//     const handleSubmit = ((e) => {
//         e.preventDefault();
//         if (editIndex == null) {
//             let obj = { id: Date.now(), ...formData }
//             setRecord([...record, obj])
//             localStorage.setItem("Student", JSON.stringify([...record, obj]))
//         } else {
//             let singleData = record.find((item) => item.id == editIndex)
//             singleData.name = formData.name
//             singleData.subject = formData.subject
//             localStorage.setItem("Student", JSON.stringify(record))
//         }

//         setEditIndex(null)
//         setFormData({
//             name: "",
//             subject: ""
//         })
//     })

//     const handleDelete = ((id) => {
//         let newData = record.filter((item) => item.id != id)
//         setRecord(newData)
//         localStorage.setItem("Student", JSON.stringify(newData))
//     })

//     const handleEdit = ((id) => {
//         let singleData = record.find((item) => item.id == id)
//         setFormData({
//             name: singleData.name,
//             subject: singleData.subject
//         })

//         setEditIndex(id)
//     })


//     return (
//         <div>
//             <h1>4 Prektish crud</h1>

//             <form onSubmit={handleSubmit}>
//                 <input type="text" name='name' value={formData.name} placeholder='Enter NAme' onChange={handleChangs} />
//                 <input type="text" name='subject' value={formData.subject} placeholder='Enter Subject' onChange={handleChangs} />

//                 <button type='Submit'>{editIndex == null ? "submit" : "Update"}</button>
//             </form>

//             {
//                 record ?
//                     record.map((e, i) => {
//                         return <ul key={i}>
//                             <li>{i + 1}</li>
//                             <li>{e.id}</li>
//                             <li>{e.name}</li>
//                             <li>{e.subject}</li>
//                             <button onClick={() => handleDelete(e.id)}>Delte</button>
//                             <button onClick={() => handleEdit(e.id)}>Edit</button>
//                         </ul>
//                     }) : <p>No deta</p>
//             }
//         </div>
//     )
// }

// export default PrektishCrud




import React, { useState } from 'react'

const PrektishCrud = () => {

    const [formData, setFormData] = useState({})

    const handleChanges= ((e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    })
  return (
    <div>
      <h1>5 Prektish Crud</h1>

      <form onClick={handleSubmit}>
        <input type="text " name='name' placeholder='enter name' onChange={handleChanges} />
        <input type="text " name='subject' placeholder='enter subject' onChange={handleChanges} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default PrektishCrud
