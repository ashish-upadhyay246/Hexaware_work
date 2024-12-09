import { useState } from "react";

const Marks = ({ onTotalChange }) => {
    let [eng, setEng] = useState();
    let [hin, setHin] = useState();
    let [mat, setMat] = useState();
    let [sci, setSci] = useState();
    let [sst, setSst] = useState();

    const handleEng = (event) => {
        setEng(event.target.value);
    }
    const handleHin = (event) => {
        setHin(event.target.value);
    }
    const handleMat = (event) => {
        setMat(event.target.value);
    }
    const handleSci = (event) => {
        setSci(event.target.value);
    }
    const handleSst = (event) => {
        setSst(event.target.value);
    }

    const handleSubmit = () => {
        const totalMarks =
            parseInt(eng) + parseInt(hin) + parseInt(mat) + parseInt(sci) + parseInt(sst);

        onTotalChange(totalMarks);
    }

    return (
        <>
            <h2>Enter Marks</h2>
            <input type="text" placeholder="English" value={eng} onChange={handleEng} /><br/>
            <input type="text" placeholder="Hindi" value={hin} onChange={handleHin} /><br/>
            <input type="text" placeholder="Maths" value={mat} onChange={handleMat} /><br/>
            <input type="text" placeholder="Science" value={sci} onChange={handleSci} /><br/>
            <input type="text" placeholder="SST" value={sst} onChange={handleSst} />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default Marks;
