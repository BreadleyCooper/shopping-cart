import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Cart from "./Cart";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import ProductCard from "./ProductCard";
import Products from "./Products";


const RouteSwitch = () =>{ 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch