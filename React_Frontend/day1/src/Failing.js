const Failing = ({ total, average, grade }) => {
    return (
        <div>
            <h2>Unfortunately you DID NOT PASS!</h2>
            <h3>Total: {total}</h3>
            <h3>Avg: {average}</h3>
            <h3>Grade: {grade}</h3>
            <h3>Better luck next time</h3>
        </div>
    );
}

export default Failing;
