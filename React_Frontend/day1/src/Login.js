import { useState } from "react";

const Login = () => {


    let [user, setUser] = useState("");
    let [pwd, setPwd] = useState("");
    let [newpwd, setNewPwd] = useState("");
    let [email, setEmail] = useState("");
    let [flag, setFlag] = useState(0);

    const handleUser = (event) => {
        setUser(event.target.value);
    }
    const handlePwd = (event) => {
        setPwd(event.target.value);
    }

    const handleNewPwd = (event) => {
        setNewPwd(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const signup = () => {
        let data = { user, email, pwd };
        data = JSON.stringify(data);
        localStorage.setItem(user, data);
    }


    const signin = () => {
        let data = JSON.parse(localStorage.getItem(user))
        if (pwd == data.pwd) {
            alert("valid")
        }
        else {
            alert("not valid..")
        }
    }

    const showupdate = () => {
        setFlag(1);
    }
    const closeupdate = () => {
        setFlag(0);
    }


    const update = () => {
        let data = JSON.parse(localStorage.getItem(user))
        if (newpwd == "") {
            alert("New Password should not be empty");
        }
        else if (data.pwd == pwd) {
            data.pwd = newpwd
            data = JSON.stringify(data);
            localStorage.setItem(user, data);
        }
        else {
            alert("invalid password")
        }
        closeupdate();

    }

    const deleteAccnt = () => {
        let data = JSON.parse(localStorage.getItem(user))
        if (pwd == data.pwd) {
            localStorage.removeItem(data.user);
        }
        else {
            alert("invalid password")
        }
    }
    return (<div class="div1">
        <h1>Login</h1>
        <input type="text" class="ipbox" id="ip1" onChange={handleUser} placeholder="User" />
        <input type="text" class="ipbox" id="ip2" onChange={handlePwd} placeholder="Password" />
        <input type="text" class="ipbox" id="ip3" onChange={handleEmail} placeholder="New Email" />
        {
            flag == 0 ? null : <input type="text" class="ipbox" id="ip4" onChange={handleNewPwd} placeholder="New Password" />
        }


        <div class="button-box">
            <button class="btn" onClick={signup}>SignUp</button>
            <button class="btn" onClick={signin}>Login</button>
            <button class="btn" onClick={deleteAccnt} >Delete</button>
            {flag === 0 ? <button className="btn" onClick={showupdate}>Update Password</button> : null}
            {flag === 1 ? <button className="btn" onClick={update}>Done</button> : null}


        </div>

    </div>)
}
export default Login;