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
    const [cartItems, setCartItems] = useState([])



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

    const incrementQuantity =(product) => {
        const itemIndex = cartItems.findIndex((i) => i.id === product.id)
        if (itemIndex > -1) {
            const newCart = cartItems.slice()
            newCart[itemIndex].quantity++

            setCartItems(newCart)
            setCartCount(cartCount + 1)
        }
    }

    const decrementQuantity =(product) => {
        const itemIndex = cartItems.findIndex((i) => i.id === product.id)
        if (product.quantity >= 2 &&  (itemIndex > -1)) {
           
                const newCart = cartItems.slice()
                newCart[itemIndex].quantity--

                setCartItems(newCart)
                setCartCount(cartCount - 1)
            
        } else removeItem(product)
    }

    // Use .filter to create a new cart without the item
    const removeItem = (product) => {
        const newCart = cartItems.filter(item => item.id !== product.id)
        setCartItems(newCart)
        setCartCount(cartCount - 1)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home cartCount={cartCount}/>} /> 
                <Route path="/products" element={<Products cartCount={cartCount} cartItems={cartItems} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart incrementQuantity={incrementQuantity} cartItems={cartItems} cartCount={cartCount} decrementQuantity={decrementQuantity}/>}  />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch