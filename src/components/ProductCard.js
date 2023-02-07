import React from "react"
import "../styles/ProductCard.css"
import { uniqid }from "uniqid"



const ProductCard = (props) => {

    const {image, name, id, price, product, quantity, addToCart, cartItems} = props

    const addToCartClick = (product) => {
        addToCart(product, id)
    }



    return (
        <div className="productCardContainer">
            <img   
                src ={image}
                alt ={name}
                className="productCardImg"
                id = {id}
                >
            </img>
            <p id="productName">{name}</p>
            <div className="priceAndBtnContainer">
                <p>£{price}</p>
                <button id="addToCartBtn" quantity={quantity}price={price} product={name} productid={id} onClick={()=>addToCartClick(product, id)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard