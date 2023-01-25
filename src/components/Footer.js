import React from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css"

const Footer = () => {

    return (
        <div className="footerContainer">
            <div>Copyright Jordan Ulmer, 2023</div>
            <a href="https://github.com/BreadleyCooper">
            <GitHubIcon  id="github"></GitHubIcon>
            </a>
        </div>
    )
}

export default Footer