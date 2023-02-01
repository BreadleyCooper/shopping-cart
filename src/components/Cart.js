import React from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import "../styles/Cart.css"
import "../styles/Header.css"


const Cart = (props) => {

    const {cartItems, cartCount} = props

    return (
        <div> 
            <Header cartCount={cartCount} />
            <div className="cartContainer">
                <div className="checkoutBtnContainer">
                    <button className="checkoutBtn">Checkout</button>
                
                    <Link className="closeBtnContainer" to="/products">
                        <button className="closeCartBtn">Close</button>
                    </Link>
                </div>
            <div className="cartItems">
                {console.log(cartItems)}
                {cartItems.map((item) => {
                    return(
                        <div className="cartItemContainer">
                            <img alt={item.name} src={item.image}></img>
                            <p>{item.name}</p>
                            <div className="quantityContainer">
                                <button>+</button>
                                <label hidden htmlFor="quantityInput">Input amount for quantity, max 100</label>
                                <input type="number" id="quantityInput"></input>
                                <button>-</button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="total"></div>

            <div className="checkoutBtnContainer">
                <button className="checkoutBtn">Checkout</button>
            
                <Link className="closeBtnContainer" to="/products">
                    <button className="closeCartBtn">Close</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Cart