import { useState } from "react"
import ReactMemo from "./React-memo"


function ParantReactMemo() {

  const [count, setCount] = useState(0)
  const [color, setColor] = useState('blue')

return (
  <div>
      <h3>count:{count}</h3>
      <div style={{background:color}}>Color</div>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setColor('red')}>Red</button>
      <button onClick={()=>setColor('black')}>Black</button>
      <ReactMemo count={count}/>
  </div>
)

}

export default ParantReactMemo
