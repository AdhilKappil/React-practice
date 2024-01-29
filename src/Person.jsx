import {useState} from "react";

function Person(){

    const [name,setName] = useState()
    const [age, setAge] = useState(0)
    const [isEmploye, setEmployee] = useState(false)

    const addName = ()=>{
       setName('Adhil')
    }

    const increaseAge = ()=>{
        setAge(age + 1)
    }

    const employHandle = ()=>{
        if(!isEmploye){
            setEmployee(true)
        }else{
            setEmployee(false)
        }
    }

    return (
        <div>
            <h1>Name:{name}</h1>
            <button onClick={addName}>Save Name</button>
            <h1>Age : {age}</h1>
            <button onClick={increaseAge}>Icrease Age</button>
            <h1>Is emplye :{isEmploye ? 'Yes':'No'} </h1>
            <button onClick={employHandle}>Employee</button>
        </div>
    )
}

export default Person