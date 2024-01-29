import { useState } from "react";

function Calculator() {
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResul] = useState('')

    function addValue(e, i) {
        let value = e.target.value
        { i === 'input' ? setInput(value) : setInput2(value) }
    }

    function oparation(opa){
        let num1 = parseFloat(input)
        let num2 = parseFloat(input2)

        switch(opa){
            case 'add':
                setResul(num1 + num2)
                break;
           case 'mul':
                setResul(num1 * num2)
                break;
           case 'sub':
                setResul(num1 - num2)
                break;
           case 'div':
                setResul(num1 / num2)
                break;
            default:
                setResul(null)    
        }
    }

    function clrear(){
        setInput('')
        setInput2('')
        setResul('')
    }

    return (
        <div>
            <div>
                <input onChange={(e) => addValue(e, 'input')} type="text" value={input}></input>
                <input onChange={(e) => addValue(e, 'input1')} type="text" value={input2}></input>
            </div>
            <div>
                <button onClick={() => oparation('add')}>+</button>
                <button onClick={() => oparation('sub')}>-</button>
                <button onClick={() => oparation('mul')}>*</button>
                <button onClick={() => oparation('div')}>/</button>
                <button onClick={clrear}>clr</button>
            </div>

            <h1>{result}</h1>
        </div>
    )
}

export default Calculator