import { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const users = [
    { name: "Jatin Sharma", age: "21", pic: "./cat.jpg" },
    { name: "Pooja Gupta", age: "24", pic: "./puter.jpg" },
    { name: "Kavita Sharma", age: "25", pic: "./ball.jpg" },
    { name: "Ajay Malik", age: "27", pic: "./nerd.jpg" },
    { name: "Deepa Gupta", age: "21", pic: "./okarun.jpg" },
  ];

  const [Fusers, setFusers] = useState([]);
  const [search, setSearch] = useState("");

  // Filter users based on search
  useEffect(() => {
    setFusers(users.filter((temp) => temp.name.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  return (
    <>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Display Users */}
      <div className="main">
        {search.length > 0
          ? Fusers.map((temp, index) => (
              <Card key={index} name={temp.name} age={temp.age} pic={temp.pic} />
            ))
          : users.map((temp, index) => (
              <Card key={index} name={temp.name} age={temp.age} pic={temp.pic} />
            ))}
      </div>
    </>
  );
};

export default App;
