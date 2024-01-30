import { useCallback, useContext, useMemo, useState } from "react"
import { MyContext } from "./Context"


function UseMemo() {

    const [input, setinput] = useState('')
    const [count, setCount] = useState(0)
    const {value, setValue} = useContext(MyContext)

    const resultSqr = useMemo(()=>{
        return input * input
    },[input])

    const countIncrement = useCallback(()=>{
        setCount(count+1)
    },[count])

    function updateContext(){
        setValue('Updated Context')
    }

    return (
        <div>
           <input onChange={(e)=>setinput(e.target.value)} type="text" placeholder="enter value" value={input}/>
           <h4>Sqr: {resultSqr}</h4>
           <button onClick={(countIncrement)}>Increment</button>
           <h4>Count: {count}</h4>
           <button onClick={updateContext}>Update Context</button>
           <h4>{value}</h4>
        </div>
    )
}

export default UseMemo