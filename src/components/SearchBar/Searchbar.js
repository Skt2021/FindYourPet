import React from 'react';
import "./Searchbar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Searchbar({onChange}) {
    return (
        <div className="searchbar-container">
            <input
                type="text"
                placeholder="Search pets"
                className="search-input"
                onChange = {onChange}
                />
                <FontAwesomeIcon icon={faSearch} />
        </div>
    )
}

export default Searchbar
