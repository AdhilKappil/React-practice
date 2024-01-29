import { useReducer } from "react"

// function valueReduce(state, action) {
//   if (action === 'increment') {
//     return state + 1
//   } else {
//     return state - 1
//   }

// }

function valueReduce(state, action) {
    switch (action.type) {
        case 'change-value':
            return {
                ...state,
                value: state.value + action.change
            };

        case 'change-color':
            return {
                ...state,
                color: action.color
            };
        default:
            return state
    }
}

function UseReduce() {

    //   const [count, dispatch] = useReducer(valueReduce, 0)

    const [state, dispatch] = useReducer(valueReduce, {
        value: 0,
        color: 'white'
    });

    return (
        <div>
            <button onClick={() => dispatch({
                type: 'change-value',
                change: 1
            })}>increment</button>
            <button onClick={() => dispatch({
                type: 'change-value',
                change: 1
            })}>decrement</button>

            <div style={{ background: state.color, height: '50px', width: '50px' }}></div>

            <button onClick={() => dispatch({
                type: 'change-color',
                color: 'green'
            })}>Green</button>
            <button onClick={() => dispatch({
                type: 'change-color',
                color: 'blue'
            })}>blue</button>
            <h1>{state.value}</h1>
        </div>
    )
}

export default UseReduce    