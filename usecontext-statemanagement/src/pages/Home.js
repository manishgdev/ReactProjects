import { useContext } from "react"
import { AppContext } from "../App"

export const Home = (props) => {
    const { username } = useContext(AppContext);
    return <h1>This is Home page & username is {username}</h1>
}