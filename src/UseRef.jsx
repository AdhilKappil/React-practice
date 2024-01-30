import { useRef } from "react"


function UseRef() {

  const ref = useRef(null)

  return (
    <>
     <h3>use ref</h3>
     <div>
     <input ref={ref} type="text" />
     <button onClick={()=>ref.current.focus()}>Focus</button>
     <button onClick={()=>ref.current.value='Adhil'}>Name</button>
     </div>
    </>
  )
}

export default UseRef