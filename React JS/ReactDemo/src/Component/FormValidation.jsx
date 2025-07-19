import React, { useState } from 'react'

const FormValidation = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const [err, setErr] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        let nameReg = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
        let phoneReg = /^[6-9]\d{9}$/

        let erobj = { one: "", two: "" }


        if (!nameReg.test(name)) {
            erobj.one = "Name is Not Vaild"
        } else {
            erobj.one = ""
        }
        if (!phoneReg.test(phone)) {
            erobj.two = "Phone is Not Vaild"
        } else {
            erobj.two = ""
        }

        setErr(erobj)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h1>Form Validation</h1>
                <input type="text" placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
                <span>{err.one}</span>
                <input type="text" placeholder='Enter your Namber' onChange={(e) => setPhone(e.target.value)} />
                <span>{err.two}</span>

                <button type='Submit'>Submit</button>
            </form>

        </div>
    )
}

export default FormValidation
