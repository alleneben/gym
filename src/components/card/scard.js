import React from 'react';


const SCard = ({ children, title, footer,styles, cstyles }) => {
   
//  console.log(React.Children.toArray(children));
 

  return(
      <div className={styles.card} style={cstyles}>
          <div className={styles.title}>
            { title }
          </div>
          <div className={styles.cardbody}>
            { React.Children.toArray(children) }
          </div>
          <div className={styles.cardfooter}>
            { footer }
          </div>
      </div>
  )
}


export default SCard;