import { useCallback, useContext, useMemo, useState } from 'react'
import { MyContext } from './Context'

function UseMemo() {

    const [input, setInput] = useState('')
    const [count, setCount] = useState(0)
    const {value, setValue} = useContext(MyContext)
    
    const result = useMemo(() => {
        console.log('running');
        return input ? input * input : null
    }, [input])

    const countIncrement = useCallback(() => {
        console.log('counting');
        setCount(count + 1)
    }, [count])

    const handleUpdate = () => {
        setValue('Updated')
    }

    return (
        <div>
            <input onChange={(e) => setInput(e.target.value)} style={{ height: '30px' }} type="text" placeholder='enter value' value={input} />
            <p>result : {result}</p>
            <button onClick={countIncrement}>Icrement</button>
            <p>Count: {count}</p>
            <h3>{value}</h3>
            <button onClick={handleUpdate}>update context</button>

        </div>
    )
}

export default UseMemo