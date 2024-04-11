import { useCounter } from "../useCounter"

export const Counter = () => {

    const [count, incrementCounter, decrementCounter, resetCounter] = useCounter();

    return (
        <div>
            <button onClick={decrementCounter}>-</button>
            &nbsp;{count}&nbsp;
            <button onClick={incrementCounter}>+</button>
            <br/>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}