import React from "react"
import productArray from "../productArray"
import ProductCard from "./ProductCard"
import Header from "./Header"
import "../styles/Products.css"
import "../styles/ProductCard.css"
import { useState } from "react"

const Products = (props) => {


    const [cartCount, setCartCount] = useState(0)

    const incrementCartCount =()=> {
        setCartCount(cartCount + 1)
    }

    return (
        <div className="productsComponent">
            <Header cartCount = {cartCount}/>
            <div className="productContainer">
                
                {productArray.map((product) => {
                    return(
                        <ProductCard   
                            name={product.name}
                            image={product.image}
                            key={product.id}
                            id = {product.id}
                            price ={product.price}
                            incrementCartCount = {incrementCartCount}
                            />)
                    
                })}
            </div>
        </div>
        
    )
}

export default Products