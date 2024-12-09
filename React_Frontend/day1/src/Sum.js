import { useState } from "react";
import "./App.css"
const Sum = () => {
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
        setC(Number(A) + Number(B))
    }

    return (<div className="div1">

        <input type="number" placeholder="Enter a number" onChange={handleA}></input>
        <input type="number" placeholder="Enter a number" onChange={handleB}></input>
        <button onClick={cal}> SUM</button>
        <h2>Result {C}</h2>
    </div>)


}
export default Sum;