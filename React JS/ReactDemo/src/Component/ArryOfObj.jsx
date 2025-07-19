import React from 'react'

const ArryOfObj = (props) => {

    
    // const SingleData = arr.find((item)=>item.id == 3);

    // const filterData = arr.filter((item)=> item.id != 4);
  return (
    <div>
        <h1>YAsh ghodasara</h1>
        {
            props.data.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.id}</li>
                    <li>{e.name}</li>
                    <li>{e.Subject}</li>
                </ul>
            })
        }
    </div>
  )
}

export default ArryOfObj