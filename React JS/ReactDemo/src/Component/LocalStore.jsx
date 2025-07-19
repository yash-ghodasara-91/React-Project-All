import React, { useState } from 'react'
import { useEffect } from 'react';

const LocalStore = () => {
    const [formdata, setFormdata] = useState({});
    const [record, setRecord] = useState([]);

    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        let alldata = JSON.parse(localStorage.getItem("Student")) || [];
        setRecord(alldata)
    }, [])

    const handleChange = ((e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value,
        })
    })
    const handleSubmit = (e) => {   
        e.preventDefault();
        if (editIndex == null) {
            let obj = { id: Date.now(), ...formdata }
            setRecord([...record, obj])
            localStorage.setItem("Student", JSON.stringify([...record, obj]))
        } else {
            let singleDeta = record.find((item) => item.id == editIndex)
            singleDeta.name = formdata.name
            singleDeta.subject = formdata.subject
            localStorage.setItem("Student", JSON.stringify(record))
        }
        setEditIndex(null)
        setFormdata({
            name: "",
            subject: ""
        })
    }

    const handleDelet = ((id) => {
        let newDeta = record.filter((item) => item.id != id)
        setRecord(newDeta)
        localStorage.setItem("Student", JSON.stringify(newDeta))
    })

    const handleEdit = (id) => {
        let singleDeta = record.find((item)=> item.id == id)
        setFormdata({
           name: singleDeta.name,
           subject: singleDeta.subject
        })

        setEditIndex(id)
    }

    return (
        <div>
            <h1>Local Storage</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='name'
                    value={formdata.name}
                    placeholder='Enter your Name'
                    onChange={handleChange} />

                <input type="text"
                    name='subject'
                    value={formdata.subject}
                    placeholder='Enter your Subject'
                    onChange={handleChange} />

                <button type='submit'>{editIndex == null ? "Submit" : "Update"}</button>
            </form>

            {
                record ?
                    record.map((e, i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.subject}</li>
                            <button onClick={() => handleDelet(e.id)}>Delete</button>
                            <button onClick={() => handleEdit(e.id)}>Edit</button>
                        </ul>
                    }) : <p>No Record</p>
            }
        </div>
    )
}

export default LocalStore
