import React from "react"

const LinksContainer = (props) =>{
    return (
        <div className="links-container">
                    <h1 style={{marginBottom:10,fontSize:16}}>{props.heading}</h1>
                    {props.children}
        </div>
    )
}

export default LinksContainer 