import React from 'react'
import {useUser, AuthCheck} from "reactfire"
import Login from "./Login"

function Home(props) {

    const user= useUser();
    console.log(user);

    return (
        <AuthCheck fallback={<Login/>}>
            <div>
                <h1>Welcome to networking forms</h1>
            </div>
        </AuthCheck>
        
    )
}

export default Home
