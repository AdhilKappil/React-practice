import { useReducer } from "react"

// function valueReduce(state, action){
//     if(action ===  'increment'){
//         return state + 1
//     }else{
//        return state - 1
//     }
// }

function valueReduce (state, action){
    switch(action.type){
        case 'changeValue':
            return{
                ...state,
                value:state.value + action.value
            }

        case 'changeColor':
            return{
                ...state,
                color:action.color
            }
            
        default:    
            return state    
    }
}

function UseReduce() {

    //   const [count, dispatch] = useReducer(valueReduce,0)

    const [state, dispatch] = useReducer(valueReduce,{
        value : 0,
        color : 'red'
    })

    return (

        // <div>
        //     <h3>Count:{count}</h3>
        //     <button onClick={()=>dispatch('increment')}>increment</button>
        //     <button onClick={()=>dispatch('decrement')}>decrement</button>
        // </div>

        <div>
            <h3>count : {state.value}</h3>
            <button onClick={()=>dispatch({
                type:'changeValue',
                value : 1
            })}>Increment</button>

            <button onClick={()=>dispatch({
                type:'changeValue',
                value : -1
            })}>Decrement</button>

            <div style={{background:state.color, width:'50px', height:'50px'}}></div>
            <button onClick={()=>dispatch({
                type:'changeColor',
                color:'black'
            })}>Black</button>

            <button onClick={()=>dispatch({
                type:'changeColor',
                color : 'blue'
            })}>Blue</button>
        </div>
        
    )
}

export default UseReduce    