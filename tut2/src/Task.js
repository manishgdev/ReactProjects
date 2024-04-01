import { useEffect } from "react"

export const Task = (props) => {

    useEffect(() => {
        console.log("Component mounted")

        return () => {
            console.log("Component Unmounted")
        }
    }, [])

    return (
        <div className='task'>
            <h1 style={{ color: props.completed? "green" : "red" }}>{props.taskName}</h1>
            <button onClick={() => props.updateTask(props.id)} >Complete</button>
            <button onClick={() => props.deleteTask(props.id)} >X</button>
        </div>
    )
}