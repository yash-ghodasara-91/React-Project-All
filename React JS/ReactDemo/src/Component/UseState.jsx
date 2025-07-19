import React, { useState } from 'react'

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name] = useState("Meet");
  const [arr, setArr] = useState([10, 20, 30, 40]);
  const [boolean, setBoolean] = useState(true);

  const Update = () => {
    const updatedArr = arr.map((item) => item + 5);
    setArr(updatedArr);
  }

  return (
    <div>
      <h1>Yash Ghodasara</h1>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <div>
        {
          arr.map((e) => {
            return (
              <h1>{e}</h1>
            )
          })
        }
      </div>
      <button onClick={Update}>Update Array</button>
    </div>
  )
}

export default UseState;
 