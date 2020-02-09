import React from 'react';

import { LoginForm } from '../../forms';
import styles from './logincontainer.module.scss';


const LoginContainer = (props) => {


    return(
        <div className={styles.container}>
            <LoginForm {...props} />
        </div>
    )

}

export default LoginContainer;