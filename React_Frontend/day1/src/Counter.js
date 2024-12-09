import { useState } from "react";
import "./App.css"
const Counter = () => {
    let [c, setC] = useState(0)
    const add = () => {
        if (c === 10) {
            c = -1
        }
        setC(c + 1)
        console.log(c)
    }
    const sub = () => {
        if (c === 0) {
            c = 11
        }
        setC(c - 1)
        console.log(c)
    }
    return (<div className="div1">
        <h1> Counter Application</h1>
        <h1> {c}</h1>
        <button onClick={sub}> sub</button>
        <button onClick={add}> add</button>
    </div>)
}
export default Counter;