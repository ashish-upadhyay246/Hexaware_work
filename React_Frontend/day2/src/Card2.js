import "./App.css";

const Card = ({ title, price, image, id, RemoveData }) => {
  return (
    <div className="div1">
      <h1>{id}</h1>
      <h1>NAME: {title}</h1>
      <h2>PRICE: {price}</h2>
      <img className="pic" src={image} alt="Product" width="100px" />
      <button onClick={() => RemoveData(id)}>Remove</button>
    </div>
  );
};

export default Card;
