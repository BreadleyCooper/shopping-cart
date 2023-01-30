import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import "../styles/Header.css"
import { useState } from "react";

const Header = (props) => {

    const {cartCount} = props
    
    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <img src="images/afd-logo.png" alt="AFD Logo"></img>
            </div>
            <nav className="headerNav">
                <Link className="navLink" to="/home">
                    <div>Home</div>
                </Link>
                <Link className="navLink" to="/products">
                    <div>Products</div>
                </Link>
                <Link className="navLink" to="/cart">
                    <div className="cartBtnContainer">
                        <ShoppingCartIcon id="cartIcon"/>
                        <p>{cartCount}</p>
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Header