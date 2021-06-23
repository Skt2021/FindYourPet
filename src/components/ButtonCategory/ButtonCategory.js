import React from 'react';
import "./ButtonCategory.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonCategory({name,icon}) {
    return (
        <div className="button-category-container" >
            <FontAwesomeIcon icon={icon} className="icon" />
            <p className="button-text">{name}</p>
        </div>
    )
}

export default ButtonCategory
