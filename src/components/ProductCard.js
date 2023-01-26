import React from "react"
import "../styles/ProductCard.css"


const ProductCard = (props) => {

    const {image, name, id, price, incrementCartCount, product} = props

    const addToCartClick = (event) => {
        incrementCartCount()
        console.log(product)
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
                <button id="addToCartBtn" price={price} product={name} productID={id} onClick={addToCartClick}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard