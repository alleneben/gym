import React from 'react';

import styles from '../../asset/scss/util.module.scss';

const StatsCard = (props) => { 

   return(
     <div className={`${styles.card} ${styles.statscard}`}>
       <div className={styles.cardtitle}>
         { props.title }
       </div>
       <div className={styles.statscardbody}>
         { props.children }
       </div>
       <div className={`${styles.cardfooter}`} style={props.footer}>
         { props.footertitle}{ props.title }
       </div>
     </div>
 )

}


export default StatsCard;