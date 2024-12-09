import { useLocation } from "react-router-dom";

const Showpay = () => {

    let data = useLocation()
    let { name, sal, bonus, total } = data.state
    console.log(data.state)
    return (<>
        <div>
            <h2>NAME: {name}, SALARY: {sal}, BONUS: {bonus}, TOTAL: {total}.</h2>
        </div>


    </>)
}

export default Showpay;