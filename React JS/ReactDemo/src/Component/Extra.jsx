import React, { useEffect, useState } from 'react'

const Extra = () => {
    const [formData, setFormData] = useState ({})
    const [record,setRecord] =useState([])
    const [editIndex, setEditIndex] = useState(null)


    useEffect(()=>{
      let GetData = JSON.parse(localStorage.getItem("Extra")) || []
      setRecord(GetData)
    },[])


    const handelChanges = ((e) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    })

    const handelSubmit = ((e) => {
        e.preventDefault ();
       if (editIndex == null) {
         let obj = {id :Date.now(), ...formData}
        setRecord([...record,obj])
        localStorage.setItem("Extra", JSON.stringify(...record, obj))
       } else {
         let SingleData =record.find((item)=> item.id == editIndex)
        SingleData.name = formData.name;
        SingleData.subject = formData.subject;
        localStorage.setItem("Extra", JSON.stringify(record))
       }
       setEditIndex(null)
        setFormData({
            name : "",
            subject : ""
        })
    })

    const handleDelet =((id)=>{
      let newData = record.filter(item => item.id != id)
      setRecord(newData)
      localStorage.setItem("Extra", JSON.stringify(newData))
    })

    const handleEdit =((id)=>{
      let SingleData =record.find((item)=> item.id == id)
      setFormData({
        name: SingleData.name,
        subject: SingleData.subject
      })
      setEditIndex(id)
    })


  return (
    <div>
      <h1>Prektis extra</h1>
      <form action="" onSubmit={handelSubmit}>
        <input type="text" name="name" value={formData.name} placeholder='Enter yuor name' onChange={handelChanges} />
        <input type="text" name="subject" value={formData.subject} placeholder='Enter yuor subject' onChange={handelChanges}/>
        <button type='Submit'>{editIndex == null ? "Submit" : "Update"}</button>
      </form>

      {
        record ?
        record.map((e,i)=>{
            return <ul key={i}>
                <li>{e.id}</li>
                <li>{e.name}</li>
                <li>{e.subject}</li>
                <button onClick={()=> handleDelet(e.id)}>Delete</button>
                <button onClick={()=> handleEdit(e.id)}>Edit</button>
            </ul>
        }) : <p>Not Record</p>
      }
    </div>
  )
}

export default Extra
