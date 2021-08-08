import React from "react"
import logo from "../assets/images/Ambit.png"
import DownloadButon from "./DownloadButton"

const Header = ()=>{
    return (
        <div className="header--container">
            <div className="header--logo"><img src={logo} className="header--logo--image" alt="Ambit Text Logo"/></div>
            <DownloadButon text="Download"/>
        </div>
    )
}

export default Header