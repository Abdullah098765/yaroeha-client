import React from "react";
import "./navbar.css"
import { getAuth, signOut} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"



export default function Navbar(params) {

    const auth = getAuth()
    const [user] = useAuthState(auth)


    function signOutFunc() {
        signOut(auth).then((e) => {
            console.log(e)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (<div className="body">
        <nav>
            <ul>
                {user ? <li onClick={() => signOutFunc()}><a href='#' className="text-light">logout</a></li> : <li><a href="http://localhost:3000/signup">Sign Up</a></li>}
            </ul>
            <h2>Yaromeha Studio</h2>
        </nav>
    </div>)
}

