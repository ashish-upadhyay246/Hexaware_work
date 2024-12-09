import { useContext } from "react";
import { MyContext } from "./MyContext";

const Show = () => {
    let { id, name } = useContext(MyContext)
    return (<>
        <h1> I am the child component.</h1>
        <h2> {id} {name}</h2>
    </>)
}
export default Show;