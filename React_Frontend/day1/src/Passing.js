const Passing = ({ total, average, grade }) => {
    return (
        <div>
            <h2>Congratulations! You PASSED.</h2>
            <h3>Total: {total}</h3>
            <h3>Avg: {average}</h3>
            <h3>Grade: {grade}</h3>
        </div>
    );
}

export default Passing;
