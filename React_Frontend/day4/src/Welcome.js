import { useEffect, useState } from "react";

const Welcome = () => {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    useEffect(() => {
        const id = localStorage.getItem("id");
        const pwd = localStorage.getItem("pwd");
        setId(id);
        setPwd(pwd);
    }, []);

    return (
        <div>
            <h1>Welcome.</h1>
            <h2>Id: {id} Password: {pwd}</h2>
        </div>
    );
};

export default Welcome;
