import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  let [name, setName] = useState("");
  let [role, setRole] = useState("");
  let [email, setMail] = useState("");
  let [Password, setPassword] = useState("");

  const signup = () => {
    console.log("Signup initiated");
    let user = {
      email,
      password: Password,
      name,
      userRole: role,
    };
    console.log("Payload to API:", user);

    axios
      .post("http://localhost:9000/api/auth/signup", user)
      .then(() => alert("User added"))
      .catch((e) => {
        if (e.response) {
          console.error("Response error:", e.response.data, e.response.status);
        } else {
          console.error("Request error:", e.message);
        }
      });
  };

  const signin = () => {
    let login = { email, password: Password };
    axios
      .post("http://localhost:9000/api/auth/login", login)
      .then((res) => {
        let token = res.data.jwt;

        localStorage.setItem("token", token);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="cont">
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => setMail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter Role: Admin(0), User(1)"
        onChange={(e) => setRole(e.target.value)}
      />
      <br />
      <br />
      <button onClick={signup}>Sign up</button>

      <button onClick={signin}>Sign In</button>
    </div>
  );
}

export default App;