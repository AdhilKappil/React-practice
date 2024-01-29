import { useState } from "react"
import './App.css'

function Calculator(){

    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    function handleInput(input){
        setInput((i)=>i+input)
    }
    function handleOperation(){
       
            setResult(eval(input).toString())
       
    }

    function handleClear(){
        setInput('')
        setResult('')
    }

    return (
        <>
        <div>
         <button onClick={()=>handleInput('9')}>9</button>
         <button onClick={()=>handleInput('8')}>8</button>
         <button onClick={()=>handleInput('7')}>7</button>
         <button onClick={()=>handleInput('+')}>+</button>
        </div>
        <div>
         <button onClick={()=>handleInput('6')}>6</button>
         <button onClick={()=>handleInput('5')}>5</button>
         <button onClick={()=>handleInput('4')}>4</button>
         <button onClick={()=>handleInput('-')}>-</button>
        </div>
        <div>
         <button onClick={()=>handleInput('3')}>3</button>
         <button onClick={()=>handleInput('2')}>2</button>
         <button onClick={()=>handleInput('1')}>1</button>
         <button onClick={()=>handleOperation()}>=</button>
        </div>
        <button onClick={()=>handleInput('0')}>0</button>
        <button onClick={()=>handleInput('*')}>*</button>
         <button onClick={()=>handleInput('/')}>/</button>
        <button onClick={()=>handleClear()}>Clr</button>

        <h1>{input} : {result}</h1>
        </>
    )
}


export default Calculator

