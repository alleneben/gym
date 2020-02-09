import React from 'react';
import InnerRoutes from '../../routes/inner-routes';

import { SideNav, Button } from '../../components';
import styles from './maincontainer.module.scss';
import btnstyles from '../../asset/scss/util.module.scss';

const MainContainer = (props) => {

    return(
        <div className={styles.container}>
            <SideNav />
            <nav className={styles.nav}>Flex Fitness Workout Center</nav>
            <main className={styles.main}>
                <Button btntext='+ New' styles={`${btnstyles.btn} ${btnstyles.btnprimary}`} />
                <Button btntext='List' styles={`${btnstyles.btn} ${btnstyles.btndanger}`}  />
                <InnerRoutes />
            </main>
        </div>
    )

}

export default MainContainer;