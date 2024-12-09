import { useEffect, useState } from "react";
import Card from "./Card2";

const App = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [users, setUsers] = useState([]);
  const [Fusers, setFusers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((temp) => setUsers(temp))
      .catch((e) => console.log("Error:", e));
  }, []);

  useEffect(() => {
    const filteredProducts = users.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.price.toString().includes(search)
    );
    setFusers(filteredProducts);
  }, [search, users]);

  const addItem = () => {
    let item = { title: name, price, image };
    setUsers([...users, item]);
  };

  const RemoveData = (id) => {
    setUsers(users.filter((temp) => temp.id !== id));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="div1">
        <input
          type="text"
          placeholder="Enter item name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter image URL"
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <br />
        <button onClick={addItem}>Add New Item</button>
        <br />
        <br />
      </div>

      <div className="main">
        {search.length > 0
          ? Fusers.map((temp) => (
            <Card key={temp.id} title={temp.title} price={temp.price} image={temp.image} id={temp.id} RemoveData={RemoveData}/>
          ))
          : users.map((temp) => (
            <Card key={temp.id} title={temp.title} price={temp.price} image={temp.image} id={temp.id} RemoveData={RemoveData}/>
          ))}
      </div>
    </>
  );
};

export default App;