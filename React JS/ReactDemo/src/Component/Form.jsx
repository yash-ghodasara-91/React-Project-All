import React, { useState } from 'react'

const Form = () => {
    const [formrecord,setFormrecord] = useState ({})

    const [record,setRecord] =useState([])

    const [image, setImage] = useState ([])

    const  handleChanges = (e) =>{
        setFormrecord({
            ...formrecord,
            [e.target.name] : e.target.value
        })
    }

    const haldelClick = ()=>{
      const img =URL.createObjectURL(image)
      const form = {...formrecord, image:img}


        setRecord([...record,form])

        setFormrecord({
          name :" " ,
          subject : " ",
          city: ""
        })
    }
  return (
    <div>
      <h1>Form</h1>
      <input type="text" name='name' placeholder='Enter your Name' onChange={{handleChanges}}/>
      <input type="text" name='subject' placeholder='Enter your Subject' onChange={{handleChanges}}/>
      <input type="text" name='city' placeholder='Enter your City' onChange={{handleChanges}}/>
      <input type="file" onClick={(e)=>setImage(e.target.files[0])} />
      <button onClick={haldelClick}>Click</button>

      {
       record.map((e,i) => {
        return <ul key={i} style={{color:'black'}}>
            <li>{e.name}</li>
            <li>{e.subject}</li>
            <li>{e.city}</li>
            <li>{e.image}</li>
        </ul>
       })
      }
    </div>
  )
}

export default Form
