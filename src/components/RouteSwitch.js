import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Cart from "./Cart";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products"
import ProductCard from "./ProductCard";
import { useState } from "react";


const RouteSwitch = () =>{ 

    const [cartCount, setCartCount] = useState(0)
    const [cartItems, setCartItems] = useState([    {
        id: 0,
        image: "images/productImages/Kingspan1.jpg",
        name: "Kingspan Acousticdec - 25mm Chipboard 600mm x 600mm Panel", 
        price: "6.64",
        quantity:1
    }])



    // use findIndex to check if the product is already in the cart (return is >1) if so, slice the cart items (create a copy), then on the item that matches the id of the product that is being added to cart, and already exists in cart. Increment the total.
    // Otherwise, create a new copy of the cart and add on the product using spread syntax

    const addToCart = (product) => {
        const itemIndex = cartItems.findIndex((i) => i.id === product.id)
        if (itemIndex > -1) {
            const newCart = cartItems.slice()
            newCart[itemIndex].quantity++

            setCartItems(newCart)
            setCartCount(cartCount + 1)
        } else {
            setCartItems(oldCart => [...oldCart, product]);
            setCartCount(cartCount + 1)
        }
    }


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home cartCount={cartCount}/>} /> 
                <Route path="/products" element={<Products cartCount={cartCount} cartItems={cartItems} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} cartCount={cartCount}/>}  />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch