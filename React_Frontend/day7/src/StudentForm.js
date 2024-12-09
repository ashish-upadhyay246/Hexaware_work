import { useContext, useState } from "react"
import { studentContext } from "./StudentContext"

const StudentForm = () => {

    const [name, setName] = useState()
    const [fee, setFee] = useState()

    let { setStudent } = useContext(studentContext)

    const add = () => {
        setStudent({ name, fee })

    }
    return (<>

        <input type="text" placeholder="enter ur name " onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="enter ur fee " onChange={(e) => setFee(e.target.value)} />

        <button onClick={add}> submit</button>

    </>)


}
export default StudentForm