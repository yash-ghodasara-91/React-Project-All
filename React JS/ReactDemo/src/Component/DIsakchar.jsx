import React from 'react'

const DIsakchar = () => {
     const arr =[
        { id : 1, name : "Dhruv", Subject : "React"}, 
        { id : 2, name : "Darshan", Subject : "html"}, 
        { id : 3, name : "Meet", Subject : "Java"}, 
        { id : 4, name : "Aryan", Subject : "React"}, 
        { id : 5, name : "Dev", Subject : "React"}, 
    ]
  return (
    <div>
        {
            arr.map((e,i)=>{
                return  <ArryOfObj id={e.id} name={e.name} Subject={e.Subject}/>
            })
        }
    </div>
  )
}

export default DIsakchar