import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Cart from "./Cart";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products"
import ProductCard from "./ProductCard";


const RouteSwitch = () =>{ 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} /> 
                <Route path="/products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch