import React from 'react';
import "./Button.css";

function Button({id,name,onClick, current}) {

    return (
        <div className={id===current ? "button-container select" : "button-container"} onClick={()=>onClick(id)}>
            <p className="button-text">{name}</p>
        </div>
    )
}

export default Button;
