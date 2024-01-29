import  { useMemo, useState } from 'react'

function UseMemo() {

  const [input, setInput] = useState('')
  const [button, setbutton] = useState(0)

  let result = useMemo(()=>{
    console.log('running'); 
     return input? input*input:null
  },[input])
  // let result ;
  // function hi(){
  //   result = "hi"
  //   console.log("hiii")
  // }
  // hi()

  return (
    <div>
        <input onChange={(e)=>setInput(e.target.value)} style={{height:'30px'}} type="text" placeholder='enter value' value={input}/>
        <p>result : {result}</p>
        <button onClick={()=>setbutton((c)=> c+1)}>plus</button>
        <div>{button}</div>
        
    </div>
  )
}

export default UseMemo