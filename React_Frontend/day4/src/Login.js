import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let nav = useNavigate();
    let [id, setId] = useState("");
    let [pwd, setPwd] = useState("");

    const sign = () => {
        if (id === "mom" && pwd === "dad") {
            localStorage.setItem("id", id);
            localStorage.setItem("pwd", pwd);
            localStorage.setItem("flag", JSON.stringify(true));
            nav("/welcome", { state: { id, pwd } });
        } else {
            nav("/invalid", { state: { id, pwd } });
        }
    };

    return (
        <>
            <div className="cont">
                <input
                    type="text"
                    placeholder="Id"
                    onChange={(e) => setId(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPwd(e.target.value)}
                />
                <br />
                <button onClick={sign}>Sign in</button>
            </div>
        </>
    );
};

export default Login;
