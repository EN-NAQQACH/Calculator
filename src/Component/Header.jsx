import React from "react";

export default function Header(props){
    return(
        <div className="header">
            <p>{props.valueofbtn}</p>
            <p>{props.result}</p>
        </div>
    )
}