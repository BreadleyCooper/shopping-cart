import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    
    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <img src="images/afd-logo.png" alt="AFD Logo"></img>
            </div>
            <div>Home</div>
            <div>Products</div>
            <div className="cartBtnContainer">
                <ShoppingCartIcon />
            </div>
        </div>
    )
}

export default Header