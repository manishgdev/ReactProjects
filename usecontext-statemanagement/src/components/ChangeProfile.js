import { useState } from "react";
import { useContext } from "react"
import { AppContext } from "../App"


export const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState("");
    const { setUsername } = useContext(AppContext);

    return (
        <div>
            <input type='text' onChange={(event) => setNewUsername(event.target.value)}/>
            <button onClick={()=>setUsername(newUsername)}>Change username</button>
        </div>
    )

}