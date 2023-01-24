import React from "react"

const ProductCard = (props) => {

    const {image, name, id, price} = props

    return (
        <div className="productCardContainer">
            <img   
                src ={image}
                alt ={name}
                className="productCard"
                id = {id}
            ></img>
            <p>{name}</p>
            <p>£{price}</p>
            <button id="addToCartBtn">Add To Cart</button>
        </div>
    )
}

export default ProductCard