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

    const incrementCartCount =()=> {
      console.log("incrementCart")
        setCartCount(cartCount + 1)
    }

    const addToCart =(product)=> {
        incrementCartCount()
        setCartItems(oldCart => [...oldCart, product])
        console.log(cartItems)
    }

    // This repo has a good way of handling cart increment https://github.com/pklepa/shopping-cart/blob/6c11f0d0cf7475fb562c875ffa310497e94579e4/src/App.js#L27
 


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home cartCount={cartCount}/>} /> 
                <Route path="/products" element={<Products cartCount={cartCount} incrementCartCount={incrementCartCount} cartItems={cartItems} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} cartCount={cartCount}/>}  />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch