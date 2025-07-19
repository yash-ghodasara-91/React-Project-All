// import React, { useState } from 'react'

// const Events = () => {
//     const [name, setName] = useState('')
//     const handleClick = ()=> {
//         console.log("Hello");
//     }
//     // const handleChange = (e)=> {
//     //     setName(e.target.value)
//     //     // console.log(e.target.value);
//     // }
//   return (
//     <div>
//         <h1>Events</h1>
//         <h1>{name}</h1>
//         {/* <input type="text" onChange={(e) => handleChange(e)} /> */}
//         <input type="text" onChange={(e) => setName(e.target.value)} />
//         <button onClick={handleClick}> Click </button>
//     </div>
//   )
// }

// export default Events


import React, { useState } from 'react'

const Events = () => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [city, setCity] = useState('')

    const [dark, setDark] =useState(false)

    const [record, setRecord] =useState([])



      const handleClick = ()=> {
        // console.log(name);
        // console.log(subject);
        // console.log(city);
        let obj ={name,city,subject}
        setRecord([...record,obj])
        setName("")
        setSubject("")
        setCity("")
    }



    return (
    <div className='main' style={{background:dark?'black':'white', color:dark?'white': 'black'}}>
        <h1 style={{textAlign:'center'}}>Events</h1>
        {/* <h3>{name}</h3>
        <h3>{subject}</h3>
        <h3>{city}</h3> */}
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="text" onChange={(e) => setSubject(e.target.value)} value={subject} />
        <input type="text" onChange={(e) => setCity(e.target.value)} value={city } />
        <button onClick={handleClick}>Submit</button>
        <button onClick={()=> setDark(!dark)}>dark/light</button>


      {
       record.length>0 ?
        record.map((e,i)=>{
          return <ul key={i}>
            <li>{e.name}</li>
            <li>{e.city}</li>
            <li>{e.subject}</li>
          </ul>
        }): <p style={{textAlign:'center'}}>No Record</p>
      }

    </div>
  );
}

export default Events