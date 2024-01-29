import { useState } from "react";

function Count(){
    const [count, setCount] = useState(0)

    const increment = ()=>{
        // setCount((count) => count + 1) updation fuction
        // setCount((count) => count + 1)
        setCount(count + 1)
    }

    const reset = ()=>{
        setCount(0)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={increment}>➕</button>
            <button onClick={reset}>Reset</button> 
            <button onClick={decrement}>➖</button>
        </>
    )
}

export default Count