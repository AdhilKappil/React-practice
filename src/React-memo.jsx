import React, { useEffect } from "react";

function ReactMemo(props) {
    console.log(props.count);

    useEffect(()=>{
        return ()=>{
            console.log('cleaning');
        }
    },[props.count])
  return (
    <div></div>
  )
}

export default React.memo(ReactMemo)