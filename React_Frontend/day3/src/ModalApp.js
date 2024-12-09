import { useEffect, useState } from 'react';

import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import './App.css';
import Pcard from './Pcard';
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Header,

    Modal,
} from 'semantic-ui-react'

function ModalApp() {

    let [products, setProducts] = useState([])
    const [open, setOpen] = React.useState(false)

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(0);
    let [category, setCategory] = useState("");
    let [imageURL, setImageURL] = useState("");
    let [flag, setFlag] = useState(false)

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
    }

        , [])

    const removeCard = (id) => {


        setProducts(products.filter((temp) => temp.id != id))
    }

    const additem = () => {
        let newProduct = { title, price, category: "aaaaaaaaaaaaaaa", imageURL };

        setProducts([newProduct, ...products]);

        setOpen(false)
    }


    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>create new card</Button>}
            >
                <div className="div1">
                    <input type="text" placeholder=" enter product name" onChange={(e) => setTitle(e.target.value)} /><br />
                    <br />

                    <input type="text" placeholder="enter  price " onChange={(e) => setPrice(e.target.value)} /><br />
                    <br />

                    <input type="text" placeholder="enter image url" onChange={(e) => setImageURL(e.target.value)} /><br />
                    <br /><br />

                    <br /><br />
                </div>
                <button onClick={additem}> add into database</button>
                <button onClick={close}>cancel</button>

            </Modal>
            {
                flag == false ?
                    <Segment>
                        <Dimmer active>
                            <Loader />
                        </Dimmer>

                        <Image src='/images/wireframe/short-paragraph.png' />
                    </Segment>
                    :
                    products ? products.map((temp) => <Pcard id={temp.id} title={temp.title} image={temp.image} price={temp.price} description={temp.description} removeCard={removeCard} />) : null}
            <button> show</button>
        </div>
    );
}

export default ModalApp;