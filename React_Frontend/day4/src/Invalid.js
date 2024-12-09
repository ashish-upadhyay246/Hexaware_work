import { useLocation } from "react-router-dom";

const Invalid = () => {

    let data = useLocation()
    let { id, pwd } = data.state
    console.log(data.state)
    return (<>
        <div>
            <h1>Invalid Credentials!</h1>
            <h2>ID: {id} and password: {pwd} combination does not exist.</h2>
        </div>


    </>)
}

export default Invalid;