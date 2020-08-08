import React from 'react';

import styles from '../../asset/scss/util.module.scss';
import status from '../../asset/scss/status.module.scss';


const Order = (props) => {
    const {nam,ord,tel,loc,sts,stp,ost,osn,amt,open,sno} = props

    const state = ost === '0' ? 'notpaid' : ost === '1' ? 'paid' : ost === '2' ? 'moved' : ost === '3' ? 'moved' : ost === '4' ? 'delivered' : ost === '5' ? 'closed' : 'canceled';
    
    return(
        <>
            <div onClick={open} className={`${styles.order}`}>
                <div className={styles.top}>{nam}</div>
                <div className={styles.center}>
                    <div className={`${styles.serial} ${styles[state]}`}>{sno+1}</div>
                    <div className={`${styles.status} ${status[state]}`}>{osn} <span>{stp.substring(0,16)}</span></div>
                    <div></div>
                </div>
                <div className={styles.bottom}>{ord}</div>
                {/* <div className={styles.ordercontent}>
                    <h2>{ord}</h2>
                    <p id={styles.nam}>{nam}</p>
                    <p id={styles.tel}>{tel}</p>
                    <p id={styles.loc}>{loc}</p>
                    <p id={styles.loc}>GHC {amt}</p>
                    <p id={styles.loc}>{osn}</p>
                </div> */}
            </div>
        </>
    )
}

export default Order;