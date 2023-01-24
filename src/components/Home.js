import React from "react"
import { Link } from "react-router-dom"
import Header from "./Header"

const Home = () => {
    
    return (
        <div className="homeContainer">
            <Header />

            <div className="tagline">Elevate your space with AFD Access Flooring.</div>

            <Link to="/products">
            <div className="shopNowContainer">
                <button className="shopNowBtn">Shop Now</button>
            </div>
            </Link>

            <div className="homeImageContainer">
                <img alt="Terrazzo Flooring" src="images/AFDHome.jpg"></img>
            </div>
        </div>
    )
}

export default Home