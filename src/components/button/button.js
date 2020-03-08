import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const Button = ({ btntext, styles, onclick,disable,ico }) => {

    return(
        <button className={styles} onClick={onclick} disabled={disable}>
        <FontAwesomeIcon
            style={{ fontSize: "1.1rem", marginRight: ".3rem" }}
            icon={ico} />{" "}
            
            {btntext}
        </button>
    )
}

export default Button;