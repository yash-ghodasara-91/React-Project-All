import React, { useEffect, useState } from 'react'

const PrektishTWO = () => {
    const [formData, setFormData] = useState({})
    const [record, setRecord] = useState([])

    const [editIndex, setEditIndex] = useState(null)


    useEffect(() => {
        let GetData = JSON.parse(localStorage.getItem("demo"))
        setRecord(GetData)
    }, [])

    const handleChange = ((e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    })

    const handleSubmit = ((e) => {
        e.preventDefault();
        if (editIndex == null) {
            let obj = { id: Date.now(), ...formData }
            setRecord([...record, obj])
            localStorage.setItem("demo", JSON.stringify([...record, obj]))
        } else {
            let singleDeta = record.find((item) => item.id == editIndex)
            singleDeta.name = formData.name
            singleDeta.subject = formData.subject
            localStorage.setItem("Student", JSON.stringify(record))
       }
       setEditIndex(null)
        setFormData({
            name: "",
            subject: ""
        })
    })

    const haldelDelete = ((id) => {
        let newDeta = record.filter(item => item.id != id)
        setRecord(newDeta)
        localStorage.setItem("demo", JSON.stringify(newDeta))

    })

    const handleEdit = ((id) => {
        let singleDeta = record.find((item) => item.id == id)
        setFormData({
            name: singleDeta.name,
            subject: singleDeta.subject
        })

        setEditIndex(id)
    })

    return (
        <div>
            <h1>Prektish Tow</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='enter name' onChange={handleChange} />
                <input type="text" name='subject' placeholder='enter subject' onChange={handleChange} />
                <button type='submit'>{editIndex == null ? "submit" : "Update"}</button>
            </form>

            {
                record ?
                    record.map((e, i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.subject}</li>
                            <button onClick={() => haldelDelete(e.id)}>Delete</button>
                            <button onClick={() => handleEdit(e.id)}>EDit</button>
                        </ul>
                    }) : <p>No deta found</p>
            }
        </div>
    )
}

export default PrektishTWO
