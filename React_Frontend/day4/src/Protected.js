import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
    let nav = useNavigate();

    useEffect(() => {
        let flag = JSON.parse(localStorage.getItem("flag"));
        if (!flag) {
            nav("/signin");
        }
    }, [nav]);

    return <>{Component}</>;
};

export default Protected;
