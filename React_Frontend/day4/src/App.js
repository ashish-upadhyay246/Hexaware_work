import { Link } from "react-router-dom";
import Routing from "./Routing";
import { useEffect, useState } from "react";

const App = () => {
    let [users, setUsers] = useState(["asha", "pooja", "pratima"]);

    useEffect(() => {
        localStorage.clear();
    }, []);
    return (
        <>
            <div>
                <Routing />

                <ul>
                    {users.map((temp) => (
                        <Link key={temp} to={`/user/${temp}`}>
                            <li>
                                <h2>{temp}</h2>
                            </li>
                        </Link>
                    ))}
                </ul>

                <Link to="./signin">
                    <button>Sign In</button>
                </Link>
            </div>
        </>
    );
};

export default App;
