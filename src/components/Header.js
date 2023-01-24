import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
    
    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <img src="images/afd-logo.png" alt="AFD Logo"></img>
            </div>
            <Link to="/home">
                <div>Home</div>
            </Link>
            <Link to="/products">
                <div>Products</div>
            </Link>
            <div className="cartBtnContainer">
                <ShoppingCartIcon />
            </div>
        </div>
    )
}

export default Header