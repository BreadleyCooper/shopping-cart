import React from "react"

const Cart = () => {

    return (
        <div className="cartContainer"> 
            <div className="cartHead"></div>
            <div className="cartItems"></div>

            <div className="total"></div>

            <div className="checkoutBtnContainer">
                <button id="checkoutBtn"></button>
            </div>
            <div className="closeBtnContainer">
                <button id="closeCartBtn"></button>
            </div>
        </div>
    )
}

export default Cart