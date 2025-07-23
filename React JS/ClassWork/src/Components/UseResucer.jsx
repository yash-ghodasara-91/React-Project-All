import React, { useReducer } from 'react'

const UseResucer = () => {
    const initialState = 0
    const reducer = (state, action) => {
        switch (action) {
            case "inc1":
                return state += 1;
            case "inc10":
                return state += 10;
            case "inc100":
                return state += 100;
            default:
                return state

        }
    }

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>UseReducer</h1>
            {count}

            <button onClick={() => dispatch("int1")}>1</button>
            <button onClick={() => dispatch("int10")}>10</button>
            <button onClick={() => dispatch("int100")}>100</button>
        </div>
    )
}

export default UseResucer
