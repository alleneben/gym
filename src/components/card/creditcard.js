import React from 'react';


import styles from '../../asset/scss/util.module.scss';


const CrediCard = (props) => {

    const { children, data, opacity }  = props
    // console.log(data);
    


    return(
        <div className={styles.container}>
            {/* <div className={styles.sleeve}>
                <div className={styles.creditcard}>
                    <div className={styles.cardcompany}>West Frodo</div>
                    <div className={styles.cardnumber}>
                    <div className={styles.digitgroup}>4141 7204 9012 0029</div>
                    </div>
                    <div className={styles.cardexpire}><span className={styles.cardtext}>CVC</span> 321 <span className={styles.cardtext}>Expires</span> 12/24</div>
                    <div className={styles.cardholder}>John P. Smith</div>
                    <input type="text" />
                    <div className={styles.cardtype}>Debit card</div>
                </div>
                </div> */}
                <div className={styles.sleeve}>
                    <div className={`${styles.creditcard} ${styles.selected}`} style={{ background: '#555', opacity: opacity }}>
                        <div className={styles.cardcompany}>{data? data.enm : ''}</div>
                        <div className={styles.cardnumber}>
                            <div className={styles.digitgroup}>4234 1302 3798 0265</div>
                        </div>
                        <div className={styles.cardexpire}><span className={styles.cardtext}>CVC</span> 321 <span className={styles.cardtext}>Expires</span> 12/24</div>
                        <div className={styles.cardholder}>{data? data.snm + ', ' +data.fnm : ''}</div>
                        <div className={styles.cardtype}>Debit card</div>
                        <div className={styles.children}>{ children }</div>
                    </div>
                </div>
                {/* <div className={styles.sleeve}>
                    <div className={styles.creditcard} style={{background: "#3B3"}}>
                        <div className={styles.cardcompany}>West Frodo</div>
                        <div className={styles.cardnumber}>
                        <div className={styles.digitgroup}>4812 0322 0517 2840</div>
                        </div>
                        <div className={styles.cardexpire}><span className={styles.cardtext}>CVC</span> 321 <span className={styles.cardtext}>Expires</span> 12/24</div>
                        <div className={styles.cardholder}>John P. Smith</div>
                        <div className={styles.cardtype}>Debit card</div>
                    </div>
            </div> */}
        </div>
    )
}


export default CrediCard;