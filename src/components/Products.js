import React from "react"
import productArray from "../productArray"
import ProductCard from "./ProductCard"
import Header from "./Header"
import Footer from "./Footer"

const Products = () => {


    return (
        <div className="productContainer">
            <Header />
            {productArray.map((product) => {
                console.log(product)
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
        
    )
}

export default Products