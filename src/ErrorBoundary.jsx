import { useEffect, useState } from "react"

function Erroboundery ({children}){
    const [findError, setfindError] = useState(false)
    
    useEffect(()=>{
        const erroHandler = ((error)=>{
            console.log('error spoted',error);
            setfindError(true)
        })
    },[findError])

    if(findError){
        return <div>Somthing whent to wrong</div>
    }else{
        return children
    }
}

export default Erroboundery