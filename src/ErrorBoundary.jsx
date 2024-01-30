
import { useEffect, useState } from "react"


function ErrorBoundary({children}) {

    const [findError, setfindError] = useState(false)

    useEffect(()=>{
        const errorHandle = ((error)=>{
            console.log('error found',error);
            setfindError(true)
        })
    },[])
    

    if(findError){
        return <div>Somthing whent to wrong please try later</div>
    }else{
        return children
    }

}

export default ErrorBoundary