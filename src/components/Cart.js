import React from "react"

const Cart = (props) => {

    const {cartItems} = props

    return (
        <div className="cartContainer"> 
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
                <button id="checkoutBtn"></button>
            </div>
            <div className="closeBtnContainer">
                <button id="closeCartBtn"></button>
            </div>
        </div>
    )
}

export default Cart