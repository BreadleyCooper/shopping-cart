import React from "react"

const ProductCard = (props) => {

    const {image, name, id} = props

    return (
        <div className="productCardContainer">
            <img   
                src ={image}
                alt ={name}
                className="productCard"
                id = {id}
            ></img>
        </div>
    )
}

export default ProductCard