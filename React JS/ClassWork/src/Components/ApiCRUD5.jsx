import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCRUD5 = () => {
    const [formData, setFormData] = useState({})
    const [record, setRecord] = useState([])
    const [editIndex, setEditIndex] = useState(null)


    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        await axios.get("http://localhost:1008/users").then((data) => {
            setRecord(data.data)
        })
    }

    const handleChanges = ((e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    })

    const handleAddData = async (e) => {
        e.preventDefault();

        if (editIndex == null) {
            await axios.post("http://localhost:1008/users", formData).then((res) => {
                setRecord([...record, res.data])
            })
        } else {
            await axios.put(`http://localhost:1008/users/${editIndex}`).then((res) => {
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

    const handleEdit = ((id) => {
        let singleData = record.find((item) => item.id == id)
        setFormData({
            name: singleData.name,
            subject: singleData.subject
        })
        setEditIndex(id)
    })
    return (
        <div>
            <form onSubmit={handleAddData}>
                <h1>ApiCRUD 5 PRAKETISH</h1>
                <input type="text" name='name' value={formData.name} placeholder='Enter Name' onChange={handleChanges} />
                <input type="text" name='subject' value={formData.subject} placeholder='Enter Subject' onChange={handleChanges} />
                <button type='submit'>{editIndex == null ? "Add Data" : " Update Data"}</button>
            </form>

            {
                record.map((e, i) => {
                    return <ul key={i}>
                        <li>{i + 1}</li>
                        <li>{e.id}</li>
                        <li>{e.name}</li>
                        <li>{e.subject}</li>
                        <button onClick={() => handleDelete(e.id)}>Delete</button>
                        <button onClick={() => handleEdit(e.id)}>Edit</button>
                    </ul>
                })
            }
        </div>
    )
}

export default ApiCRUD5
