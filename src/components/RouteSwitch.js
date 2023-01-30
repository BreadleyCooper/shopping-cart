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

    const incrementCartCount =()=> {
      console.log("incrementCart")
        setCartCount(cartCount + 1)
    }

    const addToCart =(product)=> {
        setCartItems(oldCart => [...oldCart, product])
        console.log(cartItems)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home cartCount={cartCount}/>} /> 
                <Route path="/products" element={<Products cartCount={cartCount} incrementCartCount={incrementCartCount} addToCart={addToCart} cartItems={cartItems} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems}/>}  />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch