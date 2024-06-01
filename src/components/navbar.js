import React from "react";
import logo from "../images/troll-face-internet-meme-hakeem-harrie-removebg-preview.png";
export default function Navbar(){
    return(
        <nav className="nav-bar">
            <div className="logo">
            <img src={logo} className="nav-img"/>
            <h3 className="nav-title">MEME GENERATOR</h3>
            </div>
            <h4 className="nav-project">React Course - Project-3</h4>
        </nav>
    )
}