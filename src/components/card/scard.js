import React from 'react';

import styles from '../../asset/scss/util.module.scss';

const SCard = (props) => {
  

 
    return(
      <div className={`${styles.card} ${styles.scard}`} >
        <div className={styles.cardtitle}>
          { props.title }
        </div>
        <div className={styles.cardbody}>
          { props.children }
        </div>
        <div className={styles.cardfooter}>
        </div>
      </div>
  )

}


export default SCard;