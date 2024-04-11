import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    const [ state, setState ] = useState(initialValue);

    const incrementCounter = () => {
        setState((prev) => prev + 1);
    }

    const decrementCounter = () => {
        setState((prev) => prev - 1);
    }

    const resetCounter = () => {
        setState(0);
    }

    return [state, incrementCounter, decrementCounter, resetCounter];
}