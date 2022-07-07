import { useState } from 'react'

export const useCounter = ( initialState = 5) => {

    const [state, setState] = useState(initialState)

    const increment = ( factor = 1) => {
        setState(state + factor);
    }

    const decrement = ( factor = 1) => {
        setState(state - factor);
    }

    const reset = () => {
        setState(initialState);
    }

    return { 
        increment, 
        decrement, 
        state, 
        reset }
}
