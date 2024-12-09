import React, { useEffect, useState } from 'react'
import Card from './Card';
import "./App.css"

const App = () => {
    let [products, setProducts] = useState([]);
    let [sproducts, setSproducts] = useState([]);
    let [search, setSearch] = useState("");

    useEffect(() => setSproducts(products.filter((temp) => temp.title.toLowerCase().includes(search.toLowerCase()) || temp.category.toLowerCase().includes(search.toLowerCase()) || temp.price.toString().includes(search))), [search])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then(temp => setProducts(temp))
            .catch((e) => console.log("Error"))
    }, [])
    return (<>
        <input className="search-box" type="text" placeholder="Enter Product Name" onChange={(event) => setSearch(event.target.value)} />
        <div className="main">
            {
                search.length > 0 ?
                    sproducts.map((temp) => <Card title={temp.title} price={temp.price} description={temp.description} category={temp.category} image={temp.image} rating={temp.rating} />)
                    :
                    products.map((temp) => <Card title={temp.title} price={temp.price} description={temp.description} category={temp.category} image={temp.image} rating={temp.rating} />)
            }

        </div>
    </>
    )
}

export default App