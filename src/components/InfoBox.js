import React from "react"

const InfoBox = (props)=>{
    return (
        <div className="container">
            <img src={props.mockimg} className="image"/>
            <div className="infoText">{props.mocktext}</div>
        </div>
    )
}

export default InfoBox