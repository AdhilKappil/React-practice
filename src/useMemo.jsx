import React, { useMemo, useState } from 'react'

function UseMemo() {

  const calculateSqr = useMemo(()=>{
     
  })

  const [input, setInput] = useState('')

  return (
    <div>
        <input onChange={setInput(event.target.value)} type="text" placeholder='enter value' value={input}/>
    </div>
  )
}

export default UseMemo