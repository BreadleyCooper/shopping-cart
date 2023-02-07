import React from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import "../styles/Cart.css"
import "../styles/Header.css"


const Cart = (props) => {

    const {cartItems, cartCount, product, incrementQuantity, decrementQuantity} = props

    return (
        <div className="cart"> 
            <Header cartCount={cartCount} />
            <div className="cartContainer">
                
            <div className="cartItems">
                {cartItems.map((item) => {
                    return(
                        <div key={item.id} className="cartItemContainer">
                            <img alt={item.name} src={item.image}></img>
                            <p>{item.name}</p>
                            <div className="quantityContainer">
                                <button onClick={()=>incrementQuantity(item)} id="incremenet" className="quantityAdjust">+</button>
                                <p>{item.quantity}</p>
                                <button onClick={()=>decrementQuantity(item)} id="decrement" className="quantityAdjust">-</button>
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