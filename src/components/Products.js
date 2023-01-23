import React from "react"
import productArray from "../productArray"
import ProductCard from "./ProductCard"

const Products = () => {

    return (
        <div className="productContainer">
            {productArray.map((product) => {
                return(
                    <ProductCard   
                        name={product.name}
                        image={product.image}
                        key={product.id}
                        id = {product.id}
                        />)
                
            })}
        </div>
    )
}

export default Products