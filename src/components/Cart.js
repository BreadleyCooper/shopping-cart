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
            <div >
            <div className="cartHead"></div>
            <div className="cartItems">
                {console.log(cartItems)}
                {cartItems.map((item) => {
                    return(
                        <div className="cartItemContainer">
                            <img alt={item.name} src={item.image}></img>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>

            <div className="total"></div>

            <div className="checkoutBtnContainer">
                <button id="checkoutBtn">Checkout</button>
            </div>
            <Link className="closeBtnContainer" to="/products">
                <button id="closeCartBtn">Close</button>
            </Link>
            </div>
        </div>
    )
}

export default Cart