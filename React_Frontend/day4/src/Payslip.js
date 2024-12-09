import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Payslip = () => {
    let nav = useNavigate();
    let [name, setName] = useState("");
    let [sal, setSal] = useState(0);
    let [bonus, setBonus] = useState(0);
    let [total, setTotal] = useState(0);

    const pay = () => {
        const calBonus = 0.05 * sal;
        const calTotal = parseFloat(sal) + calBonus;
        const Salary = sal
        setBonus(calBonus);
        setTotal(calTotal);
        setSal(Salary)
        nav("/showpay", { state: { name: name, sal: Salary, bonus: calBonus, total: calTotal }, });
    };

    return (
        <div className="cont">
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
            <input type="number" placeholder="Salary" onChange={(e) => setSal(e.target.value)} /><br />
            <button onClick={pay}>Calculate</button>
        </div>
    );
};

export default Payslip;
