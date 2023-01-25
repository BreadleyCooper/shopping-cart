import React from "react"
import productArray from "../productArray"
import ProductCard from "./ProductCard"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/Products.css"
import "../styles/ProductCard.css"

const Products = (props) => {

    // const handleCartClick = (event) => {
    //     console.log("HandleCartClick")
    //     setCartCount(cartCount + 1)
    //     console.log(cartCount)
    // }

    return (
        <div className="productsComponent">
            <Header />
            <div className="productContainer">
                
                {productArray.map((product) => {
                    return(
                        <ProductCard   
                            name={product.name}
                            image={product.image}
                            key={product.id}
                            id = {product.id}
                            price ={product.price}
                            />)
                    
                })}
            <Footer />
            </div>
        </div>
        
    )
}

export default Products