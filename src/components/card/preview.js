import React from 'react';


import styles from '../../asset/scss/util.module.scss';


const Preview = (props) => {
    const { tnm, qty, prc,} = props;
    
    


    return(
        <div className={styles.preview}>
            <div className={styles.name}> { tnm } </div>
            <div className={styles.quantity}> { qty } </div>
            <div className={styles.price}> { prc} </div>
            <div className={styles.total}> { parseFloat(qty) * parseFloat(prc)} </div>
        </div>
    )
}

export default Preview;