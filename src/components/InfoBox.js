import React from "react"

const InfoBox = (props)=>{
    return (
        <div class="container">
            <img src={props.mockimg} class="image"/>
            <div class="infoText">{props.mocktext}</div>
        </div>
    )
}

export default InfoBox