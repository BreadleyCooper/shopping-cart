import React from "react"
import productArray from "../productArray"
import ProductCard from "./ProductCard"
import Header from "./Header"
import "../styles/Products.css"
import "../styles/ProductCard.css"

const Products = (props) => {


    const {cartCount, incrementCartCount} = props

    return (
        <div className="productsComponent">
            <Header cartCount = {cartCount}/>
            <div className="productContainer">
                
                {productArray.map((product) => {
                    return(
                        <ProductCard  
                            product={product} 
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