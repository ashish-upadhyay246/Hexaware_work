import { useState } from "react";
import "./App.css"
const Payslip = () => {
    let [A, setA] = useState();
    let [B, setB] = useState();
    let [C, setC] = useState();

    const handleA = (event) => {
        setA(event.target.value)

    }
    const handleB = (event) => {
        setB(event.target.value)

    }
    const cal = () => {
        let oneDay = Number(A) / 313
        let td = oneDay * Number(B)
        let bonus = Number(A) * 0.05
        let total = (Number(A) + bonus - td)
        setC(total)
    }

    return (<div className="div1">

        <h2>PAYSLIP CALCULATION</h2>
        <input type="number" placeholder="Input Salary" onChange={handleA}></input>
        <input type="number" placeholder="Enter no. of leaves" onChange={handleB}></input>
        <br />
        <button onClick={cal}> Calculate Salary</button>
        <h2>Bonus 5% applicable</h2>
        <h2>Leaves Taken {B}</h2>
        <h2>Total Salary {C}</h2>
    </div>)


}
export default Payslip;