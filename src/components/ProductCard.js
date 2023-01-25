import React from "react"
import "../styles/ProductCard.css"


const ProductCard = (props) => {

    const {image, name, id, price, handleCartClick} = props


    return (
        <div className="productCardContainer">
            <img   
                src ={image}
                alt ={name}
                className="productCardImg"
                id = {id}
            ></img>
            <p id="productName">{name}</p>
            <div className="priceAndBtnContainer">
                <p>£{price}</p>
                <button id="addToCartBtn" onClick={handleCartClick}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard