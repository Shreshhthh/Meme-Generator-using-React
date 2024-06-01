import React from "react";
import Navbar from "./components/navbar";

import MemeApi from "./components/memeApi";

export default function App(){
    return(
        <div className="container">
            <Navbar />
            <MemeApi /> 
        </div>
    )
}