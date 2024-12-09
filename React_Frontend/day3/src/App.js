import { useEffect, useState } from 'react';
import './App.css';
import Pcard from './Pcard'; // Importing the Pcard component
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
function App() {
  let [products, setProducts] = useState([]);
  let [flag, setFlag] = useState([false]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) =>
        res.json()
      )
      .then((temp) => {
        setProducts(temp)
        setFlag(true)
      })
      .catch((e) => console.log(e))
  }, []);

  return (
    <>
      {
        flag === false ?
          <Segment>
            <Dimmer active>
              <Loader indeterminate>Preparing Files</Loader>
            </Dimmer>

            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Segment>
          :

          products.map((product) => (
            <Pcard
              key={product.id}
              id={product.id}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
    </>
  );
}

export default App;
