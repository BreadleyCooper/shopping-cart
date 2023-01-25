import React from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/Home.css"

const Home = () => {
    
    return (
        <div className="homeContainer">
            <Header />

                <div className="homeImageContainer">
                    <img className="homeImage" alt="Terrazzo Flooring" src="images/AFDHome.jpg"></img>
                    <div className="tagline">Elevate your space</div>
                </div>

                <Link className="shopNow" to="/products">
                    <button className="shopNowBtn">Shop Now</button>
                </Link>

            <Footer />
        </div>
    )
}

export default Home