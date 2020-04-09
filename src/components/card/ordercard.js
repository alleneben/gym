import React from 'react';

import styles from '../../asset/scss/util.module.scss';


const OrderCard = (props) => {
    const {nam,ord,tel,loc,sts,ost,osn,amt,open} = props

    const state = ost === '0' ? 'notpaid' : ost === '1' ? 'paid' : ost === '2' ? 'cooking' : ost === '3' ? 'moved' : 'delivered';
    
    return(
        <>
            <div onClick={open} className={`${styles.ordercard} ${styles[state]}`}>
                <div className={styles.ordercardcontent}>
                    <h2>{ord}</h2>
                    <p id={styles.nam}>{nam}</p>
                    <p id={styles.tel}>{tel}</p>
                    <p id={styles.loc}>{loc}</p>
                    <p id={styles.loc}>GHC {amt}</p>
                    <p id={styles.loc}>{osn}</p>
                </div>
            </div>
        </>
    )
}

export default OrderCard;