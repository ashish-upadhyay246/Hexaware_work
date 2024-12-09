import { useParams } from "react-router-dom";

const User = () => {


    let { nm } = useParams()
    return (<>

        <h1>Welcome User {nm}</h1>

    </>)
}
export default User;