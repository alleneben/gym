import React from 'react';





const Button = ({ btntext, styles, onclick,disable }) => {

    return(
        <button className={styles} onClick={onclick} disabled={disable}>{btntext}</button>
    )
}

export default Button;