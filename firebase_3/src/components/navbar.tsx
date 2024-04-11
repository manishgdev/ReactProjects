import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState} from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"

export const NavBar = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signOutUser = async () => {
        await signOut(auth);
        navigate("/");
    }

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Home </Link>
                { !user? <Link to="/login"> Login </Link> : <Link to="/createpost"> Create Post </Link>}
            </div>
            <div className="user">
                {user && 
                    (
                    <>
                        <p>{user?.displayName}</p>
                        <img src={user?.photoURL || ""} alt="userprofile" width="40" height="40" />
                        <button onClick={signOutUser}>Log Out</button>
                    </>
                    ) 
                }
                
            </div>
        </div>
    );
}