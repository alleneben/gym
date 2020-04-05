import React from 'react';

import styles from '../../asset/scss/util.module.scss';


const OrderCard = (props) => {
    const {nam,ord,tel,loc} = props


    return(
        <div className={styles.ordercard}>
            <div className={styles.ordercardcontent}>
                <h2>{ord}</h2>
                <p id={styles.nam}>{nam}</p>
                <p id={styles.tel}>{tel}</p>
                <p id={styles.loc}>{loc}</p>
            </div>
        </div>
    )
}

export default OrderCard;