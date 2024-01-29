import { useState } from "react";

function OnChange(){

    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [domain, setDomain] = useState('Java Script')
    const [salery, setSalery] = useState ('')

    const nameHandler = (event)=>{
        setName(event.target.value)
    }

    const aboutHandle = (event)=>{
        setAbout(event.target.value)
    }

    const domainHandler = (event)=>{
        setDomain(event.target.value)
    }

    const saleryHandler = (event)=>{
        setSalery(event.target.value)
    }
 
    return (
        <div>
            <input onChange={nameHandler} type="text" placeholder="Enter your Name" />
            <p>Name : {name}</p>
            <textarea onChange={aboutHandle} placeholder="Enter about you" name="" id="" cols="30" rows="5"></textarea>
            <p>About : {about}</p>
            <select onChange={domainHandler}>
                <option value="Java Sctipt">Java Sctipt</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
            </select>
            <p>You Domain : {domain}</p>
            <label>
                <input type="radio" value='5 LPA to 7 LPA'
                checked={salery === '5 LPA to 7 LPA'}
                onChange={saleryHandler}/>
                5 LPA to 7 LPA
            </label> <br />
            <label>
                <input type="radio" value='7 LPA to 10 LPA'
                checked={salery === '7 LPA to 10 LPA'}
                onChange={saleryHandler}/>
                7 LPA to 10 LPA
            </label> 
            <br />
            <label>
                <input type="radio" value='10 + LPA'
                checked={salery === '10 + LPA'}
                onChange={saleryHandler}/>
                10 + LPA
            </label>
            <p>LPA : {salery}</p>
        </div>
    )
}

export default OnChange