import { useRef } from "react"


function UseRef() {

    const ref = useRef(null)
   
  return (
    <>
      <h1>Use ref</h1>
      <div>
      <input ref={ref} type="text"/>
      <button onClick={()=>ref.current.value = 'adhil'}>Name</button>
      <button onClick={()=>ref.current.focus()}>Focus</button>
      </div>
    </>
  )
}

export default UseRef