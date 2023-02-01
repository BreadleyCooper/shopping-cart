import React from "react"
import "../styles/ProductCard.css"
import { uniqid }from "uniqid"



const ProductCard = (props) => {

    const {image, name, id, price, incrementCartCount, product, addToCart, cartItems} = props

    const addToCartClick = (product) => {
        incrementCartCount()
        addToCart(product)
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
                <button id="addToCartBtn" price={price} product={name} productID={id} onClick={()=>addToCartClick(product)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard