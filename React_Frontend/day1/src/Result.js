import { useState } from "react";
import Marks from "./Marks";
import Passing from "./Passing";
import Failing from "./Failing";

const Results = () => {
    const [total, setTotal] = useState();
    const [average, setAverage] = useState();
    const [grade, setGrade] = useState();
    const [passed, setPassed] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleTotal = (totalMarks) => {
        setTotal(totalMarks);
        const avg = totalMarks / 5;
        setAverage(avg);

        if (avg >= 75) {
            setGrade("A");
            setPassed(true);
        } else if (avg >= 50) {
            setGrade("B");
            setPassed(true);
        } else if (avg >= 35) {
            setGrade("C");
            setPassed(true);
        } else {
            setGrade("F");
            setPassed(false);
        }

        setIsSubmitted(true);
    };

    return (
        <>
            <Marks onTotalChange={handleTotal} />
            {isSubmitted && (
                passed ? (<Passing total={total} average={average} grade={grade} />) : (<Failing total={total} average={average} grade={grade} />)
            )}
        </>
    );
}

export default Results;
