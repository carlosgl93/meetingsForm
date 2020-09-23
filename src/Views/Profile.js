import React from "react";
import { useUser, AuthCheck } from "reactfire";
import Login from "./Login"

function Profile() {
    const user = useUser();
    console.log( user);
  return (
    <AuthCheck fallback={<Login/>}>
      <div>
        <h1>This is your profile</h1>
      </div>
    </AuthCheck>
  );
}

export default Profile;
