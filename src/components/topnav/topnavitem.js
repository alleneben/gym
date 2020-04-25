import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const TopNavItem = (props) => {
    const [open, setopen] = useState(false);

    return(
        <li className="nav-item">
            <div className="icon-button" onClick={() => setopen(!open)}>
                {props.icon}
            </div>
            {open && props.children}
        </li>
    )
}

export default TopNavItem;