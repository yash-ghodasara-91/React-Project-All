import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    // useEffect(() => {
    //     console.log("Hello");
    // }, [])

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Hello");
    }, [count])
    return (
        <div>
            <h1>UseEffect</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1 class="text-3xl font-medium underline">
                Hello world!
            </h1>
        </div>

    )
}

export default UseEffect