import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from './features/CounterSlices';

const ReduxCounter = () => {

    const dispatch = useDispatch()

    const  count = useSelector((state)=>{
        return state.counterkey.count
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  )
}

export default ReduxCounter
