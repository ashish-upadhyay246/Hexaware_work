import React from 'react'
import "./App.css"

const Card = ({ title, price, description, category, image, rating }) => {
    return (
        <div className="div1">
            <h1>Title : {title}</h1>
            <h1>Price : {price}</h1>
            <img alt="" src={image} width="100px" />

        </div>
    )
}

export default Card;