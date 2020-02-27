import React from 'react';

import utilstyle from '../../asset/scss/util.module.scss';

class SCard extends React.Component {
   

 
  render(){
      return(
          <div className={utilstyle.card}>
              <div className={utilstyle.cardtitle}>
                { this.props.title }
              </div>
              <div className={utilstyle.cardbody}>
                { this.props.children }
              </div>
              <div className={utilstyle.cardfooter}>
              </div>
          </div>
    )
  }

}


export default SCard;