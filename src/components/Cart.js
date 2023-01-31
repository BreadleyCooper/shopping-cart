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
            <div className="cartItems">
                {cartItems.map((item) => {
                    return(
                        <div className="cartItemContainer">
                            <img alt={item.name} src={item.image}></img>
                            <p>{item.name}</p>
                            <div className="quantityContainer">
                                <button>+</button>
                                <label hidden for="quantity">Quantity, max 100</label>
                                <input type="number" id="quantity" min="1" max="100" defaultValue={item.quantity}></input>
                                <button>-</button>
                            </div>
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