import React from 'react'
import {useUser, AuthCheck} from "reactfire"
import Register from "./Register"

function Home(props) {

    const user= useUser();
    console.log(user);

    return (
        <AuthCheck fallback={<Register/>}>
            <div>
                <h1>Welcome to networking forms</h1>
            </div>
        </AuthCheck>
        
    )
}

export default Home
