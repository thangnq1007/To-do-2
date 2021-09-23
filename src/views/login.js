import React, { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import "./login.css"

function AppLogin() {
  const adminUser = {
    name: "admin",
    password: "admin1"
  }

  const [user, setUser] = useState({name:""});
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);

    if (details.name == adminUser.name && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name
      });
    } else {
      console.log("Details don't match!")
      setError("Details do not match!")
    }
  }


  const Logout = () => {
   setUser({ name: ""})
  }

  return (
    <div className="AppLogin">
      {(user.name !="")?(
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : ( 
        <LoginForm Login={Login} error={error}/>
       )}

    </div>

  );
}


export default AppLogin;